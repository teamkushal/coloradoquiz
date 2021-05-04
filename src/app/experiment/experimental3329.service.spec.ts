import { TestBed } from '@angular/core/testing';

import { Experimental3329Service } from './experimental3329.service';

describe('Experimental3329Service', () => {
  let service: Experimental3329Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3329Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
