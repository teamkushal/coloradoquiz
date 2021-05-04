import { TestBed } from '@angular/core/testing';

import { Experimental2354Service } from './experimental2354.service';

describe('Experimental2354Service', () => {
  let service: Experimental2354Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2354Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
