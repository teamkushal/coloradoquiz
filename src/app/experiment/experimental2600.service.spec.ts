import { TestBed } from '@angular/core/testing';

import { Experimental2600Service } from './experimental2600.service';

describe('Experimental2600Service', () => {
  let service: Experimental2600Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2600Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
