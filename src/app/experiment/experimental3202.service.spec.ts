import { TestBed } from '@angular/core/testing';

import { Experimental3202Service } from './experimental3202.service';

describe('Experimental3202Service', () => {
  let service: Experimental3202Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3202Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
