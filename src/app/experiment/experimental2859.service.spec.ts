import { TestBed } from '@angular/core/testing';

import { Experimental2859Service } from './experimental2859.service';

describe('Experimental2859Service', () => {
  let service: Experimental2859Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2859Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
