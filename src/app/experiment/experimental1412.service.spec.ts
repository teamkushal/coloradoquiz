import { TestBed } from '@angular/core/testing';

import { Experimental1412Service } from './experimental1412.service';

describe('Experimental1412Service', () => {
  let service: Experimental1412Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1412Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
