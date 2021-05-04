import { TestBed } from '@angular/core/testing';

import { Experimental2525Service } from './experimental2525.service';

describe('Experimental2525Service', () => {
  let service: Experimental2525Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2525Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
