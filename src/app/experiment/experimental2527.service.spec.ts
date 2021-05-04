import { TestBed } from '@angular/core/testing';

import { Experimental2527Service } from './experimental2527.service';

describe('Experimental2527Service', () => {
  let service: Experimental2527Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2527Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
