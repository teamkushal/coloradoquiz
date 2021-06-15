import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {

  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everyMinute$ = interval(1 * 1000);
    const everyMinuteOnceAppIsStable$ = concat(appIsStable$, everyMinute$);

    everyMinuteOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }
}
