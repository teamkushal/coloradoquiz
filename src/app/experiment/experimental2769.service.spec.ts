import { TestBed } from '@angular/core/testing';

import { Experimental2769Service } from './experimental2769.service';

describe('Experimental2769Service', () => {
  let service: Experimental2769Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2769Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
