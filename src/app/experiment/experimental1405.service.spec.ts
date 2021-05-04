import { TestBed } from '@angular/core/testing';

import { Experimental1405Service } from './experimental1405.service';

describe('Experimental1405Service', () => {
  let service: Experimental1405Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1405Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
