import { TestBed } from '@angular/core/testing';

import { Experimental1556Service } from './experimental1556.service';

describe('Experimental1556Service', () => {
  let service: Experimental1556Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1556Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
