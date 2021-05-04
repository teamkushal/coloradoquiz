import { TestBed } from '@angular/core/testing';

import { Experimental2008Service } from './experimental2008.service';

describe('Experimental2008Service', () => {
  let service: Experimental2008Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2008Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
