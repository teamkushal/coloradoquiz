import { TestBed } from '@angular/core/testing';

import { Experimental2361Service } from './experimental2361.service';

describe('Experimental2361Service', () => {
  let service: Experimental2361Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2361Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
