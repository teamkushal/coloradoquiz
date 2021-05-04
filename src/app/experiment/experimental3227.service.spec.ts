import { TestBed } from '@angular/core/testing';

import { Experimental3227Service } from './experimental3227.service';

describe('Experimental3227Service', () => {
  let service: Experimental3227Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3227Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
