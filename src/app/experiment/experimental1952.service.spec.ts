import { TestBed } from '@angular/core/testing';

import { Experimental1952Service } from './experimental1952.service';

describe('Experimental1952Service', () => {
  let service: Experimental1952Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1952Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
