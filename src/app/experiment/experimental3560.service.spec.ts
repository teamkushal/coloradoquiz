import { TestBed } from '@angular/core/testing';

import { Experimental3560Service } from './experimental3560.service';

describe('Experimental3560Service', () => {
  let service: Experimental3560Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3560Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
