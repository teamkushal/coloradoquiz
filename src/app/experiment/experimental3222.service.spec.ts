import { TestBed } from '@angular/core/testing';

import { Experimental3222Service } from './experimental3222.service';

describe('Experimental3222Service', () => {
  let service: Experimental3222Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3222Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
