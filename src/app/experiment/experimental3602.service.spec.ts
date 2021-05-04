import { TestBed } from '@angular/core/testing';

import { Experimental3602Service } from './experimental3602.service';

describe('Experimental3602Service', () => {
  let service: Experimental3602Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3602Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
