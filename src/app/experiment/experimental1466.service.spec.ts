import { TestBed } from '@angular/core/testing';

import { Experimental1466Service } from './experimental1466.service';

describe('Experimental1466Service', () => {
  let service: Experimental1466Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1466Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
