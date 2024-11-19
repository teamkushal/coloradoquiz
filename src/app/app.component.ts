import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { PromptUpdateService } from './prompt-update.service';
import { IpinfoService } from './ipinfo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(private sw: PromptUpdateService, private ipInfoApi: IpinfoService) {
    // this.sw.checkForUpdates();
    setInterval(() => this.sw.checkForUpdates(), 60000);
    let ipInformation = localStorage.getItem("ipInformation");
    if (ipInformation === null) {
      this.ipInfoApi.getIpAddress();
      this.ipInfoApi.myObservable$.subscribe(response => {
        localStorage.setItem("ipInformation", JSON.stringify(response));
      });
    }
  }
}
