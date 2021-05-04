import { TestBed } from '@angular/core/testing';

import { Experimental1421Service } from './experimental1421.service';

describe('Experimental1421Service', () => {
  let service: Experimental1421Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1421Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
