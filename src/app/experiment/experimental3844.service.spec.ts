import { TestBed } from '@angular/core/testing';

import { Experimental3844Service } from './experimental3844.service';

describe('Experimental3844Service', () => {
  let service: Experimental3844Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3844Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
