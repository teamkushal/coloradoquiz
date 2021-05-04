import { TestBed } from '@angular/core/testing';

import { Experimental2860Service } from './experimental2860.service';

describe('Experimental2860Service', () => {
  let service: Experimental2860Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2860Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
