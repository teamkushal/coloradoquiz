import { TestBed } from '@angular/core/testing';

import { Experimental1489Service } from './experimental1489.service';

describe('Experimental1489Service', () => {
  let service: Experimental1489Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1489Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
