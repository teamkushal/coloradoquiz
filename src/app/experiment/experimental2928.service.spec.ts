import { TestBed } from '@angular/core/testing';

import { Experimental2928Service } from './experimental2928.service';

describe('Experimental2928Service', () => {
  let service: Experimental2928Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2928Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
