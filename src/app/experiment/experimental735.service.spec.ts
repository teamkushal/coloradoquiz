import { TestBed } from '@angular/core/testing';

import { Experimental735Service } from './experimental735.service';

describe('Experimental735Service', () => {
  let service: Experimental735Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental735Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
