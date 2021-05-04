import { TestBed } from '@angular/core/testing';

import { Experimental299Service } from './experimental299.service';

describe('Experimental299Service', () => {
  let service: Experimental299Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental299Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
