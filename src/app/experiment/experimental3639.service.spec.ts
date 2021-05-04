import { TestBed } from '@angular/core/testing';

import { Experimental3639Service } from './experimental3639.service';

describe('Experimental3639Service', () => {
  let service: Experimental3639Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3639Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
