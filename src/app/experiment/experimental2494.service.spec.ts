import { TestBed } from '@angular/core/testing';

import { Experimental2494Service } from './experimental2494.service';

describe('Experimental2494Service', () => {
  let service: Experimental2494Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2494Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
