import { TestBed } from '@angular/core/testing';

import { Experimental3196Service } from './experimental3196.service';

describe('Experimental3196Service', () => {
  let service: Experimental3196Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3196Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
