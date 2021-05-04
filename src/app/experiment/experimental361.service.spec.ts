import { TestBed } from '@angular/core/testing';

import { Experimental361Service } from './experimental361.service';

describe('Experimental361Service', () => {
  let service: Experimental361Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental361Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
