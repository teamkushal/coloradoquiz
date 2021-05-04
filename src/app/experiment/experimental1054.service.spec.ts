import { TestBed } from '@angular/core/testing';

import { Experimental1054Service } from './experimental1054.service';

describe('Experimental1054Service', () => {
  let service: Experimental1054Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1054Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
