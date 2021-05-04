import { TestBed } from '@angular/core/testing';

import { Experimental653Service } from './experimental653.service';

describe('Experimental653Service', () => {
  let service: Experimental653Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental653Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
