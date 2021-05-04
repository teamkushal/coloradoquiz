import { TestBed } from '@angular/core/testing';

import { Experimental3260Service } from './experimental3260.service';

describe('Experimental3260Service', () => {
  let service: Experimental3260Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3260Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
