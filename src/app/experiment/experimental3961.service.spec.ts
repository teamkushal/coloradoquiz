import { TestBed } from '@angular/core/testing';

import { Experimental3961Service } from './experimental3961.service';

describe('Experimental3961Service', () => {
  let service: Experimental3961Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3961Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
