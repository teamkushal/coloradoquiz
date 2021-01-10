import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LoadingService } from './loading.service';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private myBehaviorSubject: BehaviorSubject<Quiz>;
  public myObservable$: Observable<Quiz>;
  private subscription: Subscription = new Subscription();

  jsonUrl: string = '/assets/quiz/us-history.json';

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.myBehaviorSubject = new BehaviorSubject<Quiz>(this.createDummyQuiz());
    this.myObservable$ = this.myBehaviorSubject as Observable<Quiz>;
  }

  createDummyQuiz(): Quiz {
    return {
      "title": "Loading...",
      "description": "This is the placeholder quiz",
      "questions": [
          {
              "id": 1,
              "question": "Select the smallest number from the list",
              "options": [
                  {
                      "label": "A",
                      "text": "1732",
                      "correct": true
                  },
                  {
                      "label": "B",
                      "text": "1987",
                      "correct": false
                  },
                  {
                      "label": "C",
                      "text": "1776",
                      "correct": false
                  },
                  {
                      "label": "D",
                      "text": "2020",
                      "correct": false
                  }
              ]
          }
      ]
  };
  }

  getQuiz(jsonUrl: string = this.jsonUrl): void {
    const myObservable = this.http.get(jsonUrl) as Observable<Quiz>;
    this.loadingService.showLoaderUntilCompleted(myObservable).subscribe((response: Quiz) => {
      console.log({ response });
      this.myBehaviorSubject.next(response);
    });
  }
}
