import { TestBed } from '@angular/core/testing';

import { Experimental1267Service } from './experimental1267.service';

describe('Experimental1267Service', () => {
  let service: Experimental1267Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1267Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
