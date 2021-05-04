import { TestBed } from '@angular/core/testing';

import { Experimental3230Service } from './experimental3230.service';

describe('Experimental3230Service', () => {
  let service: Experimental3230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
