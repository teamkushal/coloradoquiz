import { TestBed } from '@angular/core/testing';

import { Experimental1906Service } from './experimental1906.service';

describe('Experimental1906Service', () => {
  let service: Experimental1906Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1906Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
