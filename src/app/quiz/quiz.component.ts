import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { Option } from '../option';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  score: boolean[];
  scorePercentage: number;

  constructor(
    private api: QuizService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {
    this.quiz = this.api.createDummyQuiz();
    this.score = new Array<boolean>();
    this.scorePercentage = this.calculateScorePercentage(this.score, this.quiz.questions.length);
  }

  calculateScorePercentage(score: boolean[], total: number): number {
    let result = 0;
    score.forEach(response => {
      if (response) {
        result += 1;
      }
    });
    return result / total * 100;
  }

  ngOnInit(): void {
    console.log({ title: this.activatedRoute.snapshot.params['title'] });
    const title = this.activatedRoute.snapshot.params['title'];
    if (title === undefined) {
      this.api.getQuiz();
      this.api.myObservable$.subscribe((response) => {
        this.quiz = response;
        this.title.setTitle(response.title);
        this.scorePercentage = this.calculateScorePercentage(this.score, this.quiz.questions.length);
      });
    } else {
        this.api.getQuiz(environment.baseUrl, title);
        this.api.myObservable$.subscribe((response) => {
          this.quiz = response;
          this.title.setTitle(response.title);
          this.scorePercentage = this.calculateScorePercentage(this.score, this.quiz.questions.length);
        });
    }
  }

  onClick(questionNumber: number, option: Option) {
    if (option.correct === true) {
      this.score[questionNumber - 1] = true;
      this.openSnackBar(`Your answer is correct! ${option?.more}`, `Dandy!`);
    } else {
      this.score[questionNumber - 1] = false;
      this.openSnackBar(`You picked ${option.text}. That is not correct. ${option?.more}`, `Try again?`);
    }
    this.scorePercentage = this.calculateScorePercentage(this.score, this.quiz.questions.length);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: undefined,
    });
  }

}
