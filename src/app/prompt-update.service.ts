import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    updates.available.subscribe((event) => {
      if (this.promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  promptUser(event: UpdateAvailableEvent): boolean {
    if (event.available === event.current) {
      return false;
    } else {
      return true;
    }
  }
}
