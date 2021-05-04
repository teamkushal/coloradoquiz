import { TestBed } from '@angular/core/testing';

import { Experimental1496Service } from './experimental1496.service';

describe('Experimental1496Service', () => {
  let service: Experimental1496Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1496Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
