import { TestBed } from '@angular/core/testing';

import { Experimental1043Service } from './experimental1043.service';

describe('Experimental1043Service', () => {
  let service: Experimental1043Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1043Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
