import { TestBed } from '@angular/core/testing';

import { Experimental3547Service } from './experimental3547.service';

describe('Experimental3547Service', () => {
  let service: Experimental3547Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3547Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
