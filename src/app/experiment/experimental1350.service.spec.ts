import { TestBed } from '@angular/core/testing';

import { Experimental1350Service } from './experimental1350.service';

describe('Experimental1350Service', () => {
  let service: Experimental1350Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1350Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
