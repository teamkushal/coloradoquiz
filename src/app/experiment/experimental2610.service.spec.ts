import { TestBed } from '@angular/core/testing';

import { Experimental2610Service } from './experimental2610.service';

describe('Experimental2610Service', () => {
  let service: Experimental2610Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2610Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
