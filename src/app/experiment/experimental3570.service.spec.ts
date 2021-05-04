import { TestBed } from '@angular/core/testing';

import { Experimental3570Service } from './experimental3570.service';

describe('Experimental3570Service', () => {
  let service: Experimental3570Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3570Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
