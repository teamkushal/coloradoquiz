import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-key-industries',
    templateUrl: './key-industries.component.html',
    styleUrls: ['./key-industries.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class KeyIndustriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
