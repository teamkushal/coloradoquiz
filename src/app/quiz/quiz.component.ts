import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  constructor(
    private api: QuizService
  ) {
    this.quiz = this.api.createDummyQuiz();
  }

  ngOnInit(): void {
    this.api.getQuiz();
    this.api.myObservable$.subscribe((response) => {
      this.quiz = response;
    });
  }

}
