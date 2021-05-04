import { TestBed } from '@angular/core/testing';

import { Experimental2064Service } from './experimental2064.service';

describe('Experimental2064Service', () => {
  let service: Experimental2064Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2064Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
