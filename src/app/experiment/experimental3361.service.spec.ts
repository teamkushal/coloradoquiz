import { TestBed } from '@angular/core/testing';

import { Experimental3361Service } from './experimental3361.service';

describe('Experimental3361Service', () => {
  let service: Experimental3361Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3361Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
