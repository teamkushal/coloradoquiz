import { TestBed } from '@angular/core/testing';

import { Experimental617Service } from './experimental617.service';

describe('Experimental617Service', () => {
  let service: Experimental617Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental617Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
