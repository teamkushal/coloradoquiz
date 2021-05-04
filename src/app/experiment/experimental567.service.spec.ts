import { TestBed } from '@angular/core/testing';

import { Experimental567Service } from './experimental567.service';

describe('Experimental567Service', () => {
  let service: Experimental567Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental567Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
