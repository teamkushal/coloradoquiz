import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';
import { IpinfoService } from './ipinfo.service';
import { LoadingComponent } from './loading/loading.component';
import { PromptUpdateService } from './prompt-update.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly promptUpdate = inject(PromptUpdateService);
  private readonly ipInfo = inject(IpinfoService);

  // Instantiated for its side effect: subscribing to unrecoverable SW state.
  private readonly unrecoverableState = inject(HandleUnrecoverableStateService);

  constructor() {
    setInterval(() => this.promptUpdate.checkForUpdates(), 60_000);

    if (localStorage.getItem('ipInformation') === null) {
      this.ipInfo.getIpAddress().subscribe((response) => {
        localStorage.setItem('ipInformation', JSON.stringify(response));
      });
    }
  }
}
