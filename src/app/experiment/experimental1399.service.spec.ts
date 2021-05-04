import { TestBed } from '@angular/core/testing';

import { Experimental1399Service } from './experimental1399.service';

describe('Experimental1399Service', () => {
  let service: Experimental1399Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1399Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
