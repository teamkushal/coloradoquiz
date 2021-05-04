import { TestBed } from '@angular/core/testing';

import { Experimental1367Service } from './experimental1367.service';

describe('Experimental1367Service', () => {
  let service: Experimental1367Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1367Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
