import { TestBed } from '@angular/core/testing';

import { Experimental1643Service } from './experimental1643.service';

describe('Experimental1643Service', () => {
  let service: Experimental1643Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1643Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
