import { TestBed } from '@angular/core/testing';

import { Experimental2956Service } from './experimental2956.service';

describe('Experimental2956Service', () => {
  let service: Experimental2956Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2956Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
