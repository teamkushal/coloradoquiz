import { TestBed } from '@angular/core/testing';

import { Experimental1540Service } from './experimental1540.service';

describe('Experimental1540Service', () => {
  let service: Experimental1540Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1540Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
