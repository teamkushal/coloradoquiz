import { TestBed } from '@angular/core/testing';

import { Experimental2074Service } from './experimental2074.service';

describe('Experimental2074Service', () => {
  let service: Experimental2074Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2074Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
