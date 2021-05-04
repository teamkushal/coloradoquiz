import { TestBed } from '@angular/core/testing';

import { Experimental3548Service } from './experimental3548.service';

describe('Experimental3548Service', () => {
  let service: Experimental3548Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3548Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
