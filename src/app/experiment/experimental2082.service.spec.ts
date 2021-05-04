import { TestBed } from '@angular/core/testing';

import { Experimental2082Service } from './experimental2082.service';

describe('Experimental2082Service', () => {
  let service: Experimental2082Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2082Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
