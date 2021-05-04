import { TestBed } from '@angular/core/testing';

import { Experimental3312Service } from './experimental3312.service';

describe('Experimental3312Service', () => {
  let service: Experimental3312Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3312Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
