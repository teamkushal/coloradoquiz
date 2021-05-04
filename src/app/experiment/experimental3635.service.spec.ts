import { TestBed } from '@angular/core/testing';

import { Experimental3635Service } from './experimental3635.service';

describe('Experimental3635Service', () => {
  let service: Experimental3635Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3635Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
