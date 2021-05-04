import { TestBed } from '@angular/core/testing';

import { Experimental2544Service } from './experimental2544.service';

describe('Experimental2544Service', () => {
  let service: Experimental2544Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2544Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
