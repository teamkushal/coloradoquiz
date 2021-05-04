import { TestBed } from '@angular/core/testing';

import { Experimental3353Service } from './experimental3353.service';

describe('Experimental3353Service', () => {
  let service: Experimental3353Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3353Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
