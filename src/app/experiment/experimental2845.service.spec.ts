import { TestBed } from '@angular/core/testing';

import { Experimental2845Service } from './experimental2845.service';

describe('Experimental2845Service', () => {
  let service: Experimental2845Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2845Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
