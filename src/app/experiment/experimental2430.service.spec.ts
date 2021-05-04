import { TestBed } from '@angular/core/testing';

import { Experimental2430Service } from './experimental2430.service';

describe('Experimental2430Service', () => {
  let service: Experimental2430Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2430Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
