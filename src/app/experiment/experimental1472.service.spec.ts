import { TestBed } from '@angular/core/testing';

import { Experimental1472Service } from './experimental1472.service';

describe('Experimental1472Service', () => {
  let service: Experimental1472Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1472Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
