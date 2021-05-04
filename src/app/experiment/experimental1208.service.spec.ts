import { TestBed } from '@angular/core/testing';

import { Experimental1208Service } from './experimental1208.service';

describe('Experimental1208Service', () => {
  let service: Experimental1208Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1208Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
