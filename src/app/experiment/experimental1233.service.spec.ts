import { TestBed } from '@angular/core/testing';

import { Experimental1233Service } from './experimental1233.service';

describe('Experimental1233Service', () => {
  let service: Experimental1233Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1233Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
