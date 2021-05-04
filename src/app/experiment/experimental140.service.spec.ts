import { TestBed } from '@angular/core/testing';

import { Experimental140Service } from './experimental140.service';

describe('Experimental140Service', () => {
  let service: Experimental140Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental140Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
