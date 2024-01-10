import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sw: PromptUpdateService) {
    // this.sw.checkForUpdates();
    setInterval(() => this.sw.checkForUpdates(), 60000);
  }
}
