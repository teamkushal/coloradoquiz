import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  startTime: Date;

  constructor(
    private title: Title
  ) {
    this.startTime = new Date();
  }

  ngOnInit(): void {
    this.title.setTitle(`Colorado Quiz`);
  }

}
