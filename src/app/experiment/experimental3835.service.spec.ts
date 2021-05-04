import { TestBed } from '@angular/core/testing';

import { Experimental3835Service } from './experimental3835.service';

describe('Experimental3835Service', () => {
  let service: Experimental3835Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3835Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
