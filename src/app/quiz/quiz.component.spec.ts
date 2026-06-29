import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { HoneynutCheeriosService } from '../honeynut-cheerios.service';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { QuizComponent } from './quiz.component';

const MOCK_QUIZ: Quiz = {
  title: 'Test Quiz',
  description: 'A quiz used in unit tests',
  questions: [
    {
      id: 1,
      question: 'First question',
      options: [
        { label: 'A', text: 'right', correct: true },
        { label: 'B', text: 'wrong', correct: false },
      ],
    },
    {
      id: 2,
      question: 'Second question',
      options: [
        { label: 'A', text: 'wrong', correct: false },
        { label: 'B', text: 'right', correct: true },
      ],
    },
  ],
};

describe('QuizComponent', () => {
  const snackBar = { open: vi.fn() };

  beforeEach(async () => {
    snackBar.open.mockReset();
    await TestBed.configureTestingModule({
      imports: [QuizComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        { provide: QuizService, useValue: { getQuiz: () => of(MOCK_QUIZ) } },
        { provide: HoneynutCheeriosService, useValue: { submit: vi.fn() } },
        { provide: MatSnackBar, useValue: snackBar },
      ],
    }).compileComponents();
  });

  it('creates and loads the quiz for the routed subject', async () => {
    const fixture = TestBed.createComponent(QuizComponent);
    fixture.componentRef.setInput('title', 'us-history');
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.quiz().title).toBe('Test Quiz');
  });

  it('starts at a score of zero', async () => {
    const fixture = TestBed.createComponent(QuizComponent);
    fixture.componentRef.setInput('title', 'us-history');
    await fixture.whenStable();
    expect(fixture.componentInstance.scorePercentage()).toBe(0);
  });

  it('reaches 100% once every question is answered correctly', async () => {
    const fixture = TestBed.createComponent(QuizComponent);
    fixture.componentRef.setInput('title', 'us-history');
    await fixture.whenStable();
    const component = fixture.componentInstance;

    component.onClick(1, MOCK_QUIZ.questions[0].options[0]); // correct
    expect(component.scorePercentage()).toBe(50);

    component.onClick(2, MOCK_QUIZ.questions[1].options[1]); // correct
    expect(component.scorePercentage()).toBe(100);
  });

  it('counts only the latest answer for a given question', async () => {
    const fixture = TestBed.createComponent(QuizComponent);
    fixture.componentRef.setInput('title', 'us-history');
    await fixture.whenStable();
    const component = fixture.componentInstance;

    component.onClick(1, MOCK_QUIZ.questions[0].options[1]); // wrong
    expect(component.scorePercentage()).toBe(0);

    component.onClick(1, MOCK_QUIZ.questions[0].options[0]); // corrected to right
    expect(component.scorePercentage()).toBe(50);
  });
});
