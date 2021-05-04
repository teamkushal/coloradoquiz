import { TestBed } from '@angular/core/testing';

import { Experimental2400Service } from './experimental2400.service';

describe('Experimental2400Service', () => {
  let service: Experimental2400Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2400Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
