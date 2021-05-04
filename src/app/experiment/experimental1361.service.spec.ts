import { TestBed } from '@angular/core/testing';

import { Experimental1361Service } from './experimental1361.service';

describe('Experimental1361Service', () => {
  let service: Experimental1361Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1361Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
