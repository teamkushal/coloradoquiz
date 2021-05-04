import { TestBed } from '@angular/core/testing';

import { Experimental3735Service } from './experimental3735.service';

describe('Experimental3735Service', () => {
  let service: Experimental3735Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3735Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
