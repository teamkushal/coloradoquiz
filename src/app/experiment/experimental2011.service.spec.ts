import { TestBed } from '@angular/core/testing';

import { Experimental2011Service } from './experimental2011.service';

describe('Experimental2011Service', () => {
  let service: Experimental2011Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2011Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
