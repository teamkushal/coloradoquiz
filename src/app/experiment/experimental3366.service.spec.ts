import { TestBed } from '@angular/core/testing';

import { Experimental3366Service } from './experimental3366.service';

describe('Experimental3366Service', () => {
  let service: Experimental3366Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3366Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
