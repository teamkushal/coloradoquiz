import { TestBed } from '@angular/core/testing';

import { Experimental1522Service } from './experimental1522.service';

describe('Experimental1522Service', () => {
  let service: Experimental1522Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1522Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
