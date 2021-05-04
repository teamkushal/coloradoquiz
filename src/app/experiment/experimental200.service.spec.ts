import { TestBed } from '@angular/core/testing';

import { Experimental200Service } from './experimental200.service';

describe('Experimental200Service', () => {
  let service: Experimental200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
