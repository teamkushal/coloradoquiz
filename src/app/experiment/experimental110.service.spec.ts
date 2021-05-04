import { TestBed } from '@angular/core/testing';

import { Experimental110Service } from './experimental110.service';

describe('Experimental110Service', () => {
  let service: Experimental110Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental110Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
