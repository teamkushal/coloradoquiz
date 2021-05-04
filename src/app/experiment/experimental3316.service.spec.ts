import { TestBed } from '@angular/core/testing';

import { Experimental3316Service } from './experimental3316.service';

describe('Experimental3316Service', () => {
  let service: Experimental3316Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3316Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
