import { TestBed } from '@angular/core/testing';

import { Experimental2717Service } from './experimental2717.service';

describe('Experimental2717Service', () => {
  let service: Experimental2717Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2717Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
