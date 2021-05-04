import { TestBed } from '@angular/core/testing';

import { Experimental3915Service } from './experimental3915.service';

describe('Experimental3915Service', () => {
  let service: Experimental3915Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3915Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
