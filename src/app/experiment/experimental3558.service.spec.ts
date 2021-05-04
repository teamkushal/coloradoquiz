import { TestBed } from '@angular/core/testing';

import { Experimental3558Service } from './experimental3558.service';

describe('Experimental3558Service', () => {
  let service: Experimental3558Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3558Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
