import { TestBed } from '@angular/core/testing';

import { Experimental3293Service } from './experimental3293.service';

describe('Experimental3293Service', () => {
  let service: Experimental3293Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3293Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
