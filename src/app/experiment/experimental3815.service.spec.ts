import { TestBed } from '@angular/core/testing';

import { Experimental3815Service } from './experimental3815.service';

describe('Experimental3815Service', () => {
  let service: Experimental3815Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3815Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
