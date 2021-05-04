import { TestBed } from '@angular/core/testing';

import { Experimental3518Service } from './experimental3518.service';

describe('Experimental3518Service', () => {
  let service: Experimental3518Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3518Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
