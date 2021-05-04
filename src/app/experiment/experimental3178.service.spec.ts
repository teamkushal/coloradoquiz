import { TestBed } from '@angular/core/testing';

import { Experimental3178Service } from './experimental3178.service';

describe('Experimental3178Service', () => {
  let service: Experimental3178Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3178Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
