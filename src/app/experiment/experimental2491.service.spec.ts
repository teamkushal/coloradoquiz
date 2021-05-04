import { TestBed } from '@angular/core/testing';

import { Experimental2491Service } from './experimental2491.service';

describe('Experimental2491Service', () => {
  let service: Experimental2491Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2491Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
