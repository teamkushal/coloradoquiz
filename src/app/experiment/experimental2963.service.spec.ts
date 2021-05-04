import { TestBed } from '@angular/core/testing';

import { Experimental2963Service } from './experimental2963.service';

describe('Experimental2963Service', () => {
  let service: Experimental2963Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2963Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
