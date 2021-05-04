import { TestBed } from '@angular/core/testing';

import { Experimental1905Service } from './experimental1905.service';

describe('Experimental1905Service', () => {
  let service: Experimental1905Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1905Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
