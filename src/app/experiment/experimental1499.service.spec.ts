import { TestBed } from '@angular/core/testing';

import { Experimental1499Service } from './experimental1499.service';

describe('Experimental1499Service', () => {
  let service: Experimental1499Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1499Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
