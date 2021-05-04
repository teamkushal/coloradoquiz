import { TestBed } from '@angular/core/testing';

import { Experimental2881Service } from './experimental2881.service';

describe('Experimental2881Service', () => {
  let service: Experimental2881Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2881Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
