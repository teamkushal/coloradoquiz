import { TestBed } from '@angular/core/testing';

import { Experimental282Service } from './experimental282.service';

describe('Experimental282Service', () => {
  let service: Experimental282Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental282Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
