import { TestBed } from '@angular/core/testing';

import { Experimental1368Service } from './experimental1368.service';

describe('Experimental1368Service', () => {
  let service: Experimental1368Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1368Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
