import { TestBed } from '@angular/core/testing';

import { Experimental2211Service } from './experimental2211.service';

describe('Experimental2211Service', () => {
  let service: Experimental2211Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2211Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
