import { TestBed } from '@angular/core/testing';

import { Experimental909Service } from './experimental909.service';

describe('Experimental909Service', () => {
  let service: Experimental909Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental909Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
