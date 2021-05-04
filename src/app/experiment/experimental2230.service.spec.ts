import { TestBed } from '@angular/core/testing';

import { Experimental2230Service } from './experimental2230.service';

describe('Experimental2230Service', () => {
  let service: Experimental2230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
