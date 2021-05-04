import { TestBed } from '@angular/core/testing';

import { Experimental205Service } from './experimental205.service';

describe('Experimental205Service', () => {
  let service: Experimental205Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental205Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
