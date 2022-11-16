import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';
import { NewsItem } from '../news-item';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News;

  constructor(
    private api: NewsService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {
    this.news = this.api.createDummyNews();
  }

  ngOnInit(): void {
    console.log({ title: this.activatedRoute.snapshot.params.title });
    const title = this.activatedRoute.snapshot.params.title;
    this.api.getNews(title);
    this.api.myObservable$.subscribe((response) => {
      console.log({ response });
      this.news = response;
      this.title.setTitle(`News | ${response.title}`);
    });
  }

  openSnackBar(message: string, action: string, duration: number): void {
    this.snackBar.open(message, action, {
      duration: duration * 1000,
    });
  }

  like(newsItem: NewsItem): void {
    this.openSnackBar(
      `Pretend that you have liked ${newsItem.title}.`,
      `Swell!`,
      3
    );
  }

  share(newsItem: NewsItem): void {
    this.openSnackBar(
      `Pretend that you have shared ${newsItem.title}.`,
      `Dandy!`,
      5
    );
  }
}
