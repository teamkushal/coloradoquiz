import { TestBed } from '@angular/core/testing';

import { Experimental2420Service } from './experimental2420.service';

describe('Experimental2420Service', () => {
  let service: Experimental2420Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2420Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
