import { TestBed } from '@angular/core/testing';

import { Experimental3192Service } from './experimental3192.service';

describe('Experimental3192Service', () => {
  let service: Experimental3192Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3192Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
