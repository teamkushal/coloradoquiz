import { TestBed } from '@angular/core/testing';

import { Experimental1846Service } from './experimental1846.service';

describe('Experimental1846Service', () => {
  let service: Experimental1846Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1846Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
