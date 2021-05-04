import { TestBed } from '@angular/core/testing';

import { Experimental1444Service } from './experimental1444.service';

describe('Experimental1444Service', () => {
  let service: Experimental1444Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1444Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
