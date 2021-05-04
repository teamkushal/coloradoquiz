import { TestBed } from '@angular/core/testing';

import { Experimental1836Service } from './experimental1836.service';

describe('Experimental1836Service', () => {
  let service: Experimental1836Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1836Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
