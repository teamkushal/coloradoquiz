import { TestBed } from '@angular/core/testing';

import { Experimental3370Service } from './experimental3370.service';

describe('Experimental3370Service', () => {
  let service: Experimental3370Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3370Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
