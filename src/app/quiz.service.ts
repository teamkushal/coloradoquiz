import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/assets/quiz';

  /** Placeholder shown while the real quiz JSON is loading. */
  static placeholder(): Quiz {
    return {
      title: 'Loading...',
      description: 'This is the placeholder quiz',
      questions: [
        {
          id: 1,
          question: 'Select the smallest number from the list',
          options: [
            { label: 'A', text: '1732', correct: true },
            { label: 'B', text: '1987', correct: false },
            { label: 'C', text: '1776', correct: false },
            { label: 'D', text: '2020', correct: false },
          ],
        },
      ],
    };
  }

  getQuiz(subject = 'us-history', baseUrl: string = this.baseUrl): Observable<Quiz> {
    return this.http.get<Quiz>(`${baseUrl}/${subject}.json`);
  }
}
