import { TestBed } from '@angular/core/testing';

import { Experimental2369Service } from './experimental2369.service';

describe('Experimental2369Service', () => {
  let service: Experimental2369Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2369Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
