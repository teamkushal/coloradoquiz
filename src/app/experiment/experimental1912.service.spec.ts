import { TestBed } from '@angular/core/testing';

import { Experimental1912Service } from './experimental1912.service';

describe('Experimental1912Service', () => {
  let service: Experimental1912Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1912Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
