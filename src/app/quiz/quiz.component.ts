import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { map, switchMap, tap } from 'rxjs';
import { HoneynutCheeriosService } from '../honeynut-cheerios.service';
import { Option } from '../option';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [
    DatePipe,
    DecimalPipe,
    UpperCasePipe,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatToolbarModule,
    MenuComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  private readonly api = inject(QuizService);
  private readonly telemetry = inject(HoneynutCheeriosService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);

  /** Bound from the `:title` route parameter via `withComponentInputBinding()`. */
  readonly title = input<string>();

  /** Per-question correctness, keyed by question id. */
  private readonly answers = signal<ReadonlyMap<number, boolean>>(new Map());

  protected readonly startTime = signal(new Date());

  /** Reactively loads the quiz whenever the route subject changes. */
  readonly quiz = toSignal(
    toObservable(this.title).pipe(
      map((title) => title ?? 'us-history'),
      tap(() => {
        this.answers.set(new Map());
        this.startTime.set(new Date());
      }),
      switchMap((subject) =>
        this.api.getQuiz(subject).pipe(
          tap((quiz) => {
            this.titleService.setTitle(quiz.title);
            if (this.title()) {
              this.telemetry.submit(
                `arrived at page ${subject}`,
                this.router.url,
                document.referrer ?? '',
              );
            }
          }),
        ),
      ),
    ),
    { initialValue: QuizService.placeholder() },
  );

  readonly scorePercentage = computed(() => {
    const total = this.quiz().questions.length || 1;
    let correct = 0;
    for (const ok of this.answers().values()) {
      if (ok) {
        correct += 1;
      }
    }
    return (correct / total) * 100;
  });

  onClick(question: number, option: Option): void {
    this.answers.update((current) => {
      const next = new Map(current);
      next.set(question, option.correct);
      return next;
    });

    if (option.correct) {
      this.openSnackBar(`Your answer is correct! ${option.more ?? ''}`, 'Dandy!');
    } else {
      this.openSnackBar(
        `You picked ${option.text}. That is not correct. ${option.more ?? ''}`,
        'Try again?',
      );
    }

    if (this.scorePercentage() === 100) {
      this.openSnackBar(this.completionMessage(), 'Swell!');
    }
  }

  private completionMessage(): string {
    const seconds = Math.ceil(Math.abs(Date.now() - this.startTime().getTime()) / 1000);
    if (seconds === 1) {
      return `Congratulations, you've completed the test in under ${seconds} second.`;
    }
    if (seconds < 61) {
      return `Congratulations, you've completed the test in under ${seconds} seconds.`;
    }
    if (seconds < 3601) {
      return `Congratulations, you've completed the test in under ${seconds / 60} minutes.`;
    }
    return `Congratulations, you've completed the test in under ${seconds / (60 * 60)} hours.`;
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: undefined });
  }
}
