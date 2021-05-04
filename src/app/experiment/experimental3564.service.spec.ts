import { TestBed } from '@angular/core/testing';

import { Experimental3564Service } from './experimental3564.service';

describe('Experimental3564Service', () => {
  let service: Experimental3564Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3564Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
