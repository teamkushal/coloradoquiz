import { TestBed } from '@angular/core/testing';

import { Experimental1419Service } from './experimental1419.service';

describe('Experimental1419Service', () => {
  let service: Experimental1419Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1419Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
