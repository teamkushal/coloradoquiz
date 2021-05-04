import { TestBed } from '@angular/core/testing';

import { Experimental3708Service } from './experimental3708.service';

describe('Experimental3708Service', () => {
  let service: Experimental3708Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3708Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
