import { TestBed } from '@angular/core/testing';

import { Experimental1635Service } from './experimental1635.service';

describe('Experimental1635Service', () => {
  let service: Experimental1635Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1635Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
