import { TestBed } from '@angular/core/testing';

import { Experimental1959Service } from './experimental1959.service';

describe('Experimental1959Service', () => {
  let service: Experimental1959Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1959Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
