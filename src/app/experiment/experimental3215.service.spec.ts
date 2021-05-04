import { TestBed } from '@angular/core/testing';

import { Experimental3215Service } from './experimental3215.service';

describe('Experimental3215Service', () => {
  let service: Experimental3215Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3215Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
