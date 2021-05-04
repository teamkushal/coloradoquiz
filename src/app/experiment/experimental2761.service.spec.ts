import { TestBed } from '@angular/core/testing';

import { Experimental2761Service } from './experimental2761.service';

describe('Experimental2761Service', () => {
  let service: Experimental2761Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2761Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
