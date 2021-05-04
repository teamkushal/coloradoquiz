import { TestBed } from '@angular/core/testing';

import { Experimental1786Service } from './experimental1786.service';

describe('Experimental1786Service', () => {
  let service: Experimental1786Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1786Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
