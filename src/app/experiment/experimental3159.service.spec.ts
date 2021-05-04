import { TestBed } from '@angular/core/testing';

import { Experimental3159Service } from './experimental3159.service';

describe('Experimental3159Service', () => {
  let service: Experimental3159Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3159Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
