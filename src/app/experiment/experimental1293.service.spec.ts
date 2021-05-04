import { TestBed } from '@angular/core/testing';

import { Experimental1293Service } from './experimental1293.service';

describe('Experimental1293Service', () => {
  let service: Experimental1293Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1293Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
