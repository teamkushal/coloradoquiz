import { TestBed } from '@angular/core/testing';

import { Experimental1025Service } from './experimental1025.service';

describe('Experimental1025Service', () => {
  let service: Experimental1025Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1025Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
