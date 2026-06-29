import { inject, Service } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

/**
 * Listens for the rare "unrecoverable" service-worker state and surfaces it.
 * Instantiated eagerly from the root component so the subscription is active.
 */
@Service()
export class HandleUnrecoverableStateService {
  private readonly updates = inject(SwUpdate);

  constructor() {
    this.updates.unrecoverable.subscribe((event) => {
      this.notifyUser(
        `An error occurred that we cannot recover from:\n${event.reason}\n\nPlease reload the page.`,
      );
    });
  }

  notifyUser(message: string): void {
    console.log(message);
  }
}
