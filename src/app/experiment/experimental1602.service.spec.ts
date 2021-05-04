import { TestBed } from '@angular/core/testing';

import { Experimental1602Service } from './experimental1602.service';

describe('Experimental1602Service', () => {
  let service: Experimental1602Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1602Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
