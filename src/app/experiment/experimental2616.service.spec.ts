import { TestBed } from '@angular/core/testing';

import { Experimental2616Service } from './experimental2616.service';

describe('Experimental2616Service', () => {
  let service: Experimental2616Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2616Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
