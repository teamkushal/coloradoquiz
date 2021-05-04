import { TestBed } from '@angular/core/testing';

import { Experimental2892Service } from './experimental2892.service';

describe('Experimental2892Service', () => {
  let service: Experimental2892Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2892Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
