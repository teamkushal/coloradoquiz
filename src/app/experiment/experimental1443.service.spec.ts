import { TestBed } from '@angular/core/testing';

import { Experimental1443Service } from './experimental1443.service';

describe('Experimental1443Service', () => {
  let service: Experimental1443Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1443Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
