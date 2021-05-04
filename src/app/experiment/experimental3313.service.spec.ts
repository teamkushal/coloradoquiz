import { TestBed } from '@angular/core/testing';

import { Experimental3313Service } from './experimental3313.service';

describe('Experimental3313Service', () => {
  let service: Experimental3313Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3313Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
