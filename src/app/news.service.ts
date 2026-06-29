import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/assets/news';

  /** Placeholder shown while the real news JSON is loading. */
  static placeholder(): News {
    return {
      title: 'Top stories',
      dateCreated: new Date().toISOString(),
      newsItems: [],
    };
  }

  getNews(subject = 'top-stories', baseUrl: string = this.baseUrl): Observable<News> {
    return this.http.get<News>(`${baseUrl}/${subject}.json`);
  }
}
