import { TestBed } from '@angular/core/testing';

import { Experimental134Service } from './experimental134.service';

describe('Experimental134Service', () => {
  let service: Experimental134Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental134Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
