import { TestBed } from '@angular/core/testing';

import { Experimental1544Service } from './experimental1544.service';

describe('Experimental1544Service', () => {
  let service: Experimental1544Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1544Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
