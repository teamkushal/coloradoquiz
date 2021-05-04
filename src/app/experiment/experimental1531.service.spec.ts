import { TestBed } from '@angular/core/testing';

import { Experimental1531Service } from './experimental1531.service';

describe('Experimental1531Service', () => {
  let service: Experimental1531Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1531Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
