import { TestBed } from '@angular/core/testing';

import { Experimental306Service } from './experimental306.service';

describe('Experimental306Service', () => {
  let service: Experimental306Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental306Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
