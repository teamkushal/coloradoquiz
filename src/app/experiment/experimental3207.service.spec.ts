import { TestBed } from '@angular/core/testing';

import { Experimental3207Service } from './experimental3207.service';

describe('Experimental3207Service', () => {
  let service: Experimental3207Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3207Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
