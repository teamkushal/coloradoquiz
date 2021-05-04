import { TestBed } from '@angular/core/testing';

import { Experimental2589Service } from './experimental2589.service';

describe('Experimental2589Service', () => {
  let service: Experimental2589Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2589Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
