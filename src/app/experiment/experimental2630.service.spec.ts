import { TestBed } from '@angular/core/testing';

import { Experimental2630Service } from './experimental2630.service';

describe('Experimental2630Service', () => {
  let service: Experimental2630Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2630Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
