import { TestBed } from '@angular/core/testing';

import { Experimental2605Service } from './experimental2605.service';

describe('Experimental2605Service', () => {
  let service: Experimental2605Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2605Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
