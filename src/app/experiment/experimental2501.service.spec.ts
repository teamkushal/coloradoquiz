import { TestBed } from '@angular/core/testing';

import { Experimental2501Service } from './experimental2501.service';

describe('Experimental2501Service', () => {
  let service: Experimental2501Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2501Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
