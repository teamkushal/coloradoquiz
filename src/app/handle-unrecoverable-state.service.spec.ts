import { TestBed } from '@angular/core/testing';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';
import { Subject } from 'rxjs';

import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';

describe('HandleUnrecoverableStateService', () => {
  let unrecoverable: Subject<UnrecoverableStateEvent>;

  beforeEach(() => {
    unrecoverable = new Subject<UnrecoverableStateEvent>();
    TestBed.configureTestingModule({
      providers: [{ provide: SwUpdate, useValue: { unrecoverable } }],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(HandleUnrecoverableStateService);
    expect(service).toBeTruthy();
  });

  it('notifies the user when an unrecoverable state occurs', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    // Injecting the service activates its constructor subscription.
    TestBed.inject(HandleUnrecoverableStateService);

    const event: UnrecoverableStateEvent = {
      type: 'UNRECOVERABLE_STATE',
      reason: 'Some error reason',
    };
    unrecoverable.next(event);

    expect(consoleLogSpy).toHaveBeenCalledWith(
      `An error occurred that we cannot recover from:\n${event.reason}\n\nPlease reload the page.`,
    );

    consoleLogSpy.mockRestore();
  });
});
