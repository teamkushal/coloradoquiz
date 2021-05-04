import { TestBed } from '@angular/core/testing';

import { Experimental1239Service } from './experimental1239.service';

describe('Experimental1239Service', () => {
  let service: Experimental1239Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1239Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
