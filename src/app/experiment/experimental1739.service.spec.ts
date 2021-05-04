import { TestBed } from '@angular/core/testing';

import { Experimental1739Service } from './experimental1739.service';

describe('Experimental1739Service', () => {
  let service: Experimental1739Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1739Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
