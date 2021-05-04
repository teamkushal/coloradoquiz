import { TestBed } from '@angular/core/testing';

import { Experimental1081Service } from './experimental1081.service';

describe('Experimental1081Service', () => {
  let service: Experimental1081Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1081Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
