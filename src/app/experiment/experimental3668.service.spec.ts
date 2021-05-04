import { TestBed } from '@angular/core/testing';

import { Experimental3668Service } from './experimental3668.service';

describe('Experimental3668Service', () => {
  let service: Experimental3668Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3668Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
