import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';

import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';

describe('HandleUnrecoverableStateService', () => {
  let service: HandleUnrecoverableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwUpdate,
      ]
    });
    service = TestBed.inject(HandleUnrecoverableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
