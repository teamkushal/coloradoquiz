import { TestBed } from '@angular/core/testing';

import { Experimental2696Service } from './experimental2696.service';

describe('Experimental2696Service', () => {
  let service: Experimental2696Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2696Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
