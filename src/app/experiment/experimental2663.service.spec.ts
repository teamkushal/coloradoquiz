import { TestBed } from '@angular/core/testing';

import { Experimental2663Service } from './experimental2663.service';

describe('Experimental2663Service', () => {
  let service: Experimental2663Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2663Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
