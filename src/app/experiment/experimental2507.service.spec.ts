import { TestBed } from '@angular/core/testing';

import { Experimental2507Service } from './experimental2507.service';

describe('Experimental2507Service', () => {
  let service: Experimental2507Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2507Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
