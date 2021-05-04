import { TestBed } from '@angular/core/testing';

import { Experimental3341Service } from './experimental3341.service';

describe('Experimental3341Service', () => {
  let service: Experimental3341Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3341Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
