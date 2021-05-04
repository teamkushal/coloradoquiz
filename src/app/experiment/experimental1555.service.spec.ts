import { TestBed } from '@angular/core/testing';

import { Experimental1555Service } from './experimental1555.service';

describe('Experimental1555Service', () => {
  let service: Experimental1555Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1555Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
