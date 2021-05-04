import { TestBed } from '@angular/core/testing';

import { Experimental3809Service } from './experimental3809.service';

describe('Experimental3809Service', () => {
  let service: Experimental3809Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3809Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
