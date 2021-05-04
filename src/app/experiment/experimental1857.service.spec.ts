import { TestBed } from '@angular/core/testing';

import { Experimental1857Service } from './experimental1857.service';

describe('Experimental1857Service', () => {
  let service: Experimental1857Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1857Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
