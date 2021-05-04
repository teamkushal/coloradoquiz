import { TestBed } from '@angular/core/testing';

import { Experimental3347Service } from './experimental3347.service';

describe('Experimental3347Service', () => {
  let service: Experimental3347Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3347Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
