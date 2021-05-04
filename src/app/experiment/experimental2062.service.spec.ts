import { TestBed } from '@angular/core/testing';

import { Experimental2062Service } from './experimental2062.service';

describe('Experimental2062Service', () => {
  let service: Experimental2062Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2062Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
