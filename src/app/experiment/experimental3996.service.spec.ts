import { TestBed } from '@angular/core/testing';

import { Experimental3996Service } from './experimental3996.service';

describe('Experimental3996Service', () => {
  let service: Experimental3996Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3996Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
