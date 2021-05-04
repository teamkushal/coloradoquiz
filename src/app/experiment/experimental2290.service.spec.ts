import { TestBed } from '@angular/core/testing';

import { Experimental2290Service } from './experimental2290.service';

describe('Experimental2290Service', () => {
  let service: Experimental2290Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2290Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
