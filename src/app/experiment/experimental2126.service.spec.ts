import { TestBed } from '@angular/core/testing';

import { Experimental2126Service } from './experimental2126.service';

describe('Experimental2126Service', () => {
  let service: Experimental2126Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2126Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
