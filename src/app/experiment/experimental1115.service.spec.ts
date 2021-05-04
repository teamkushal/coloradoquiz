import { TestBed } from '@angular/core/testing';

import { Experimental1115Service } from './experimental1115.service';

describe('Experimental1115Service', () => {
  let service: Experimental1115Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1115Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
