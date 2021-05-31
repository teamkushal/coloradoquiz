import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {
  constructor(private updates: SwUpdate) {
    this.checkForUpdates();
  }

  public checkForUpdates(): void {
    this.updates.available.subscribe((event) => {
      if (this.promptUser(event)) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  private promptUser(event: UpdateAvailableEvent): boolean {
    if (event.available === event.current) {
      return false;
    } else {
      return true;
    }
  }
}
