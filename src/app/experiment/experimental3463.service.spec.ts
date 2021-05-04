import { TestBed } from '@angular/core/testing';

import { Experimental3463Service } from './experimental3463.service';

describe('Experimental3463Service', () => {
  let service: Experimental3463Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3463Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
