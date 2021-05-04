import { TestBed } from '@angular/core/testing';

import { Experimental1483Service } from './experimental1483.service';

describe('Experimental1483Service', () => {
  let service: Experimental1483Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1483Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
