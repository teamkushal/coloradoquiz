import { TestBed } from '@angular/core/testing';

import { Experimental3680Service } from './experimental3680.service';

describe('Experimental3680Service', () => {
  let service: Experimental3680Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3680Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
