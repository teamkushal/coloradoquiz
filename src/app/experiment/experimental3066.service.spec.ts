import { TestBed } from '@angular/core/testing';

import { Experimental3066Service } from './experimental3066.service';

describe('Experimental3066Service', () => {
  let service: Experimental3066Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3066Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
