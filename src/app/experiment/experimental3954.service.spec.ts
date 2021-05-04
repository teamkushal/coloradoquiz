import { TestBed } from '@angular/core/testing';

import { Experimental3954Service } from './experimental3954.service';

describe('Experimental3954Service', () => {
  let service: Experimental3954Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3954Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
