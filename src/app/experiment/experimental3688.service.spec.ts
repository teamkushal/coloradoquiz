import { TestBed } from '@angular/core/testing';

import { Experimental3688Service } from './experimental3688.service';

describe('Experimental3688Service', () => {
  let service: Experimental3688Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3688Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
