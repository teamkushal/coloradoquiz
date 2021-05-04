import { TestBed } from '@angular/core/testing';

import { Experimental2182Service } from './experimental2182.service';

describe('Experimental2182Service', () => {
  let service: Experimental2182Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2182Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
