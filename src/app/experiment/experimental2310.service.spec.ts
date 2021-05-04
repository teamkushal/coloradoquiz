import { TestBed } from '@angular/core/testing';

import { Experimental2310Service } from './experimental2310.service';

describe('Experimental2310Service', () => {
  let service: Experimental2310Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2310Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
