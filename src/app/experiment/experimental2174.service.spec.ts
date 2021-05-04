import { TestBed } from '@angular/core/testing';

import { Experimental2174Service } from './experimental2174.service';

describe('Experimental2174Service', () => {
  let service: Experimental2174Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2174Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
