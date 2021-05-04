import { TestBed } from '@angular/core/testing';

import { Experimental3305Service } from './experimental3305.service';

describe('Experimental3305Service', () => {
  let service: Experimental3305Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3305Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
