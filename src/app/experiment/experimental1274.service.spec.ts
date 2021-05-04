import { TestBed } from '@angular/core/testing';

import { Experimental1274Service } from './experimental1274.service';

describe('Experimental1274Service', () => {
  let service: Experimental1274Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1274Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
