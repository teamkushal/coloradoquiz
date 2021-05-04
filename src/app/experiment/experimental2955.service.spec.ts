import { TestBed } from '@angular/core/testing';

import { Experimental2955Service } from './experimental2955.service';

describe('Experimental2955Service', () => {
  let service: Experimental2955Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2955Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
