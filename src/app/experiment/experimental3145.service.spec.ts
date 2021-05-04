import { TestBed } from '@angular/core/testing';

import { Experimental3145Service } from './experimental3145.service';

describe('Experimental3145Service', () => {
  let service: Experimental3145Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3145Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
