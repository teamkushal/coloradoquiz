import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-loader-io',
    templateUrl: './loader-io.component.html',
    styleUrls: ['./loader-io.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoaderIoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
