import { TestBed } from '@angular/core/testing';

import { Experimental1915Service } from './experimental1915.service';

describe('Experimental1915Service', () => {
  let service: Experimental1915Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1915Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
