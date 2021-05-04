import { TestBed } from '@angular/core/testing';

import { Experimental3015Service } from './experimental3015.service';

describe('Experimental3015Service', () => {
  let service: Experimental3015Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3015Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
