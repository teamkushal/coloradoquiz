import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { Option } from '../option';
import { QuizService } from '../quiz.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
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
  startTime: Date;

  constructor(
    private api: QuizService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.startTime = new Date();
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
      console.log(`Current timestamp: ${new Date()}.`);
      console.info({ score: this.score });
      this.score = new Array<boolean>();
    });
    this.getData();
  }

  private getData(): void {
    const title = this.activatedRoute.snapshot.params.title;
    console.log({ title });
    if (title === undefined) {
      this.api.getQuiz();
      this.startTime = new Date();
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
        this.startTime = new Date();
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
      const time = Math.ceil(Math.abs(new Date().getTime() - this.startTime.getTime()) / (1000));
        let message = `Congratulations, you've completed the test.`;
      if (time === 1) {
        message = `Congratulations, you've completed the test in under ${time} second.`;
      } else if (time < 61) {
        message = `Congratulations, you've completed the test in under ${time} seconds.`;
      } else if (time < 3601) {
        message = `Congratulations, you've completed the test in under ${time / 60} minutes.`;
      } else {
        message = `Congratulations, you've completed the test in under ${time / (60 * 60)} hours.`;
      }
      this.openSnackBar(
        message,
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
