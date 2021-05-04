import { TestBed } from '@angular/core/testing';

import { Experimental3060Service } from './experimental3060.service';

describe('Experimental3060Service', () => {
  let service: Experimental3060Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3060Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
