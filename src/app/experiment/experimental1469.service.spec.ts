import { TestBed } from '@angular/core/testing';

import { Experimental1469Service } from './experimental1469.service';

describe('Experimental1469Service', () => {
  let service: Experimental1469Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1469Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
