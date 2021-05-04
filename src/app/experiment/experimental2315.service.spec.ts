import { TestBed } from '@angular/core/testing';

import { Experimental2315Service } from './experimental2315.service';

describe('Experimental2315Service', () => {
  let service: Experimental2315Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2315Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
