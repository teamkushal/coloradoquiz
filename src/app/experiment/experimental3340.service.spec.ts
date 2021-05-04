import { TestBed } from '@angular/core/testing';

import { Experimental3340Service } from './experimental3340.service';

describe('Experimental3340Service', () => {
  let service: Experimental3340Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3340Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
