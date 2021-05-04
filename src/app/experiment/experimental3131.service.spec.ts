import { TestBed } from '@angular/core/testing';

import { Experimental3131Service } from './experimental3131.service';

describe('Experimental3131Service', () => {
  let service: Experimental3131Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3131Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
