import { TestBed } from '@angular/core/testing';

import { Experimental3007Service } from './experimental3007.service';

describe('Experimental3007Service', () => {
  let service: Experimental3007Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3007Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
