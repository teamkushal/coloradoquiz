import { TestBed } from '@angular/core/testing';

import { Experimental1099Service } from './experimental1099.service';

describe('Experimental1099Service', () => {
  let service: Experimental1099Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1099Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
