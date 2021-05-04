import { TestBed } from '@angular/core/testing';

import { Experimental2455Service } from './experimental2455.service';

describe('Experimental2455Service', () => {
  let service: Experimental2455Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2455Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
