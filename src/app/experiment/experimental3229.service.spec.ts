import { TestBed } from '@angular/core/testing';

import { Experimental3229Service } from './experimental3229.service';

describe('Experimental3229Service', () => {
  let service: Experimental3229Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3229Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
