import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { Option } from '../option';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  score: boolean[];
  scorePercentage: number;

  constructor(
    private api: QuizService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.quiz = this.api.createDummyQuiz();
    this.score = new Array<boolean>();
    this.scorePercentage = this.calculateScorePercentage(
      this.score,
      this.quiz.questions.length
    );
  }

  calculateScorePercentage(score: boolean[], total: number): number {
    let result = 0;
    score.forEach((response) => {
      if (response) {
        result += 1;
      }
    });
    return (result / total) * 100;
  }

  ngOnInit(): void {
    console.log({ title: this.activatedRoute.snapshot.params.title });
    const myNavigationEnd$ = this.router.events.pipe(
      filter((e) : e is NavigationEnd => e instanceof NavigationEnd),
      map(e => {
          this.getData();
      })
    );
    myNavigationEnd$.subscribe(x => {
      console.log(`Current timestamp: ${new Date()}.`)
    });
    this.getData();
  }

  private getData(): void {
    const title = this.activatedRoute.snapshot.params.title;
    console.log({ title });
    if (title === undefined) {
      this.api.getQuiz();
      this.api.myObservable$.subscribe((response) => {
        this.quiz = response;
        this.title.setTitle(response.title);
        this.scorePercentage = this.calculateScorePercentage(
          this.score,
          this.quiz.questions.length
        );
      });
    } else {
      this.api.getQuiz(environment.baseUrl, title);
      this.api.myObservable$.subscribe((response) => {
        this.quiz = response;
        this.title.setTitle(response.title);
        this.scorePercentage = this.calculateScorePercentage(
          this.score,
          this.quiz.questions.length
        );
      });
    }
  }

  onClick(questionNumber: number, option: Option): void {
    if (option.correct === true) {
      this.score[questionNumber - 1] = true;
      this.openSnackBar(`Your answer is correct! ${option?.more}`, `Dandy!`);
    } else {
      this.score[questionNumber - 1] = false;
      this.openSnackBar(
        `You picked ${option.text}. That is not correct. ${option?.more}`,
        `Try again?`
      );
    }
    this.scorePercentage = this.calculateScorePercentage(
      this.score,
      this.quiz.questions.length
    );
    if (this.scorePercentage === 100) {
      this.openSnackBar(
        "Congratulations, you've completed the test.",
        'Swell!'
      );
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: undefined,
    });
  }
}
