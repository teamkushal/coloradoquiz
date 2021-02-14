import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News;

  constructor(
    private api: NewsService
  ) {
    this.news = this.api.createDummyNews();
  }

  ngOnInit(): void {
    this.api.getNews();
    this.api.myObservable$.subscribe((response) => {
      console.log({ response });
      this.news = response;
    });
  }

}
