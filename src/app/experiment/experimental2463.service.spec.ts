import { TestBed } from '@angular/core/testing';

import { Experimental2463Service } from './experimental2463.service';

describe('Experimental2463Service', () => {
  let service: Experimental2463Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2463Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
