import { TestBed } from '@angular/core/testing';

import { Experimental939Service } from './experimental939.service';

describe('Experimental939Service', () => {
  let service: Experimental939Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental939Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
