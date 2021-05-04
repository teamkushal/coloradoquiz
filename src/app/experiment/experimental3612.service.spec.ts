import { TestBed } from '@angular/core/testing';

import { Experimental3612Service } from './experimental3612.service';

describe('Experimental3612Service', () => {
  let service: Experimental3612Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3612Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
