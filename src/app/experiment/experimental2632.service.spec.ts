import { TestBed } from '@angular/core/testing';

import { Experimental2632Service } from './experimental2632.service';

describe('Experimental2632Service', () => {
  let service: Experimental2632Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2632Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
