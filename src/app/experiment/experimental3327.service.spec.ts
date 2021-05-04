import { TestBed } from '@angular/core/testing';

import { Experimental3327Service } from './experimental3327.service';

describe('Experimental3327Service', () => {
  let service: Experimental3327Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3327Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
