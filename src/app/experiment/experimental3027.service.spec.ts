import { TestBed } from '@angular/core/testing';

import { Experimental3027Service } from './experimental3027.service';

describe('Experimental3027Service', () => {
  let service: Experimental3027Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3027Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
