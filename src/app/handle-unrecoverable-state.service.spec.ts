import { TestBed } from '@angular/core/testing';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';

import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';
import { Subject } from 'rxjs';

describe('HandleUnrecoverableStateService', () => {
  let service: HandleUnrecoverableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HandleUnrecoverableStateService,
        {
          provide: SwUpdate,
          useValue: jasmine.createSpyObj('SwUpdate', ['unrecoverable']),
        },
        {
          provide: 'NgswCommChannel',
          useValue: jasmine.createSpyObj('NgswCommChannel', []),
        },
      ]
    });
    service = TestBed.inject(HandleUnrecoverableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify user on unrecoverable event', () => {
    const swUpdateSpy = TestBed.inject(SwUpdate);
    const event: UnrecoverableStateEvent = { reason: 'Some error reason', type: "UNRECOVERABLE_STATE" };
    (swUpdateSpy.unrecoverable as jasmine.SpyObj<Subject<UnrecoverableStateEvent>>).next(event);
    
    const consoleLogSpy = spyOn(console, 'log');
    expect(consoleLogSpy).toHaveBeenCalledWith(`An error occurred that we cannot recover from:\n${event.reason}\n\nPlease reload the page.`);
  });  
  
});
