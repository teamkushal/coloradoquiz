import { TestBed } from '@angular/core/testing';

import { HandleUnRecoverableStateService } from './handle-un-recoverable-state.service';

describe('HandleUnRecoverableStateService', () => {
  let service: HandleUnRecoverableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUnRecoverableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
