import { TestBed } from '@angular/core/testing';

import { Experimental2661Service } from './experimental2661.service';

describe('Experimental2661Service', () => {
  let service: Experimental2661Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2661Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
