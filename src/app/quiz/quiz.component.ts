import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { Option } from '../option';
import { QuizService } from '../quiz.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  constructor(
    private api: QuizService,
    private _snackBar: MatSnackBar
  ) {
    this.quiz = this.api.createDummyQuiz();
  }

  ngOnInit(): void {
    this.api.getQuiz();
    this.api.myObservable$.subscribe((response) => {
      this.quiz = response;
    });
  }

  onClick(option: Option) {
    if (option.correct === true) {
      this.openSnackBar(`Your answer is correct!`, `Dandy!`);
    } else {
      this.openSnackBar(`You picked ${option.text}.`, `Try again?`);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
