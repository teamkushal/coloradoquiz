import { TestBed } from '@angular/core/testing';

import { Experimental3645Service } from './experimental3645.service';

describe('Experimental3645Service', () => {
  let service: Experimental3645Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3645Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
