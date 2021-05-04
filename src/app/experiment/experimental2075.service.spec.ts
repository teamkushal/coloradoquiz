import { TestBed } from '@angular/core/testing';

import { Experimental2075Service } from './experimental2075.service';

describe('Experimental2075Service', () => {
  let service: Experimental2075Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2075Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
