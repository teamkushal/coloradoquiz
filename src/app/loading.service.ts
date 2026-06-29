import { computed, Service, signal } from '@angular/core';

/**
 * Tracks the number of in-flight HTTP requests and exposes a single derived
 * `loading` signal. Counting (rather than a plain boolean) keeps the spinner
 * visible while multiple requests overlap.
 */
@Service()
export class LoadingService {
  private readonly inFlight = signal(0);

  /** True whenever at least one tracked request is pending. */
  readonly loading = computed(() => this.inFlight() > 0);

  show(): void {
    this.inFlight.update((count) => count + 1);
  }

  hide(): void {
    this.inFlight.update((count) => Math.max(0, count - 1));
  }
}
