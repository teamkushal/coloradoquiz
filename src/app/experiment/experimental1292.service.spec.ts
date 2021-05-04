import { TestBed } from '@angular/core/testing';

import { Experimental1292Service } from './experimental1292.service';

describe('Experimental1292Service', () => {
  let service: Experimental1292Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1292Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
