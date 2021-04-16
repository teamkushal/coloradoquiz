import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle(`Colorado Quiz`);
    const inspector = require('@inspector-apm/inspector-nodejs')({
      ingestionKey: 'd6a8a0ece76f65ade858c33d23661b60'
    });
  }

}
