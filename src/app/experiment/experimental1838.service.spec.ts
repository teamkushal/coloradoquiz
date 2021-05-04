import { TestBed } from '@angular/core/testing';

import { Experimental1838Service } from './experimental1838.service';

describe('Experimental1838Service', () => {
  let service: Experimental1838Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1838Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
