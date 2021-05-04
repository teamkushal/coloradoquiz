import { TestBed } from '@angular/core/testing';

import { Experimental1858Service } from './experimental1858.service';

describe('Experimental1858Service', () => {
  let service: Experimental1858Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1858Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
