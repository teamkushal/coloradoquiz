import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoadingComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
