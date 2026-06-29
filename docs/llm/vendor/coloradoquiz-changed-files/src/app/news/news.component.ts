import { DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { map, switchMap, tap } from 'rxjs';
import { NewsItem } from '../news-item';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  imports: [DatePipe, TitleCasePipe, MatButtonModule, MatCardModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  private readonly api = inject(NewsService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly titleService = inject(Title);

  /** Bound from the `:title` route parameter via `withComponentInputBinding()`. */
  readonly title = input<string>();

  readonly news = toSignal(
    toObservable(this.title).pipe(
      map((title) => title ?? 'top-stories'),
      switchMap((subject) =>
        this.api
          .getNews(subject)
          .pipe(tap((news) => this.titleService.setTitle(`News | ${news.title}`))),
      ),
    ),
    { initialValue: NewsService.placeholder() },
  );

  like(newsItem: NewsItem): void {
    this.openSnackBar(`Pretend that you have liked ${newsItem.title}.`, 'Swell!', 3);
  }

  share(newsItem: NewsItem): void {
    this.openSnackBar(`Pretend that you have shared ${newsItem.title}.`, 'Dandy!', 5);
  }

  private openSnackBar(message: string, action: string, durationSeconds: number): void {
    this.snackBar.open(message, action, { duration: durationSeconds * 1000 });
  }
}
