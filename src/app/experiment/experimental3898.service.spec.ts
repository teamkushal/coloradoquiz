import { TestBed } from '@angular/core/testing';

import { Experimental3898Service } from './experimental3898.service';

describe('Experimental3898Service', () => {
  let service: Experimental3898Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3898Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
