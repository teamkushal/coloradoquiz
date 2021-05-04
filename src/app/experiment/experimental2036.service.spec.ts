import { TestBed } from '@angular/core/testing';

import { Experimental2036Service } from './experimental2036.service';

describe('Experimental2036Service', () => {
  let service: Experimental2036Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2036Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
