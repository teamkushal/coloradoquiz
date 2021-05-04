import { TestBed } from '@angular/core/testing';

import { Experimental3150Service } from './experimental3150.service';

describe('Experimental3150Service', () => {
  let service: Experimental3150Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3150Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
