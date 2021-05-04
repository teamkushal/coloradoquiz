import { TestBed } from '@angular/core/testing';

import { Experimental2158Service } from './experimental2158.service';

describe('Experimental2158Service', () => {
  let service: Experimental2158Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2158Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
