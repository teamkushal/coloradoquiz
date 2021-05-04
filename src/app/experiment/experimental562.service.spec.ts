import { TestBed } from '@angular/core/testing';

import { Experimental562Service } from './experimental562.service';

describe('Experimental562Service', () => {
  let service: Experimental562Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental562Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
