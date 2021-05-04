import { TestBed } from '@angular/core/testing';

import { Experimental1748Service } from './experimental1748.service';

describe('Experimental1748Service', () => {
  let service: Experimental1748Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1748Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
