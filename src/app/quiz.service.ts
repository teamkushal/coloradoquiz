import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private myBehaviorSubject: BehaviorSubject<any>;
  public myObservable$: Observable<any>;
  private subscription: Subscription = new Subscription();

  jsonUrl: string = '/assets/quiz/us-history.json';

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.myBehaviorSubject = new BehaviorSubject<any>(null);
    this.myObservable$ = this.myBehaviorSubject as Observable<any>;
  }

  getQuiz(jsonUrl: string = this.jsonUrl): void {
    const myObservable = this.http.get(jsonUrl) as Observable<any>;
    this.loadingService.showLoaderUntilCompleted(myObservable).subscribe((response: any) => {
      console.log({ response });
      this.myBehaviorSubject.next(response);
    });
  }
}
