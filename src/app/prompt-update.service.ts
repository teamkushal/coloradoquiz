import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

/**
 * Checks for a new service-worker version and, when one is ready, activates it
 * and reloads the page. No-ops when the service worker is disabled (e.g. dev).
 */
@Injectable({ providedIn: 'root' })
export class PromptUpdateService {
  private readonly updates = inject(SwUpdate);

  checkForUpdates(): void {
    if (!this.updates.isEnabled) {
      return;
    }
    this.updates
      .checkForUpdate()
      .then((hasUpdate) => {
        if (hasUpdate) {
          return this.updates.activateUpdate().then(() => document.location.reload());
        }
        return undefined;
      })
      .catch((error) => console.error('Service worker update check failed', error));
  }
}
