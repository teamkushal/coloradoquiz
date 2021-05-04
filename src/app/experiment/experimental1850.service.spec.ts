import { TestBed } from '@angular/core/testing';

import { Experimental1850Service } from './experimental1850.service';

describe('Experimental1850Service', () => {
  let service: Experimental1850Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1850Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
