import { Injectable } from '@angular/core';
import { SwUpdate  } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {
  constructor(private updates: SwUpdate) {
    this.checkForUpdates();
  }

  public checkForUpdates(): void {
    this.updates.checkForUpdate().then((event) => {
      console.info("hello from check for updates");
      console.info({ event });
      if (event === true) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
