import { TestBed } from '@angular/core/testing';

import { Experimental3526Service } from './experimental3526.service';

describe('Experimental3526Service', () => {
  let service: Experimental3526Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3526Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
