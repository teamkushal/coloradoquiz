import { TestBed } from '@angular/core/testing';

import { Experimental1897Service } from './experimental1897.service';

describe('Experimental1897Service', () => {
  let service: Experimental1897Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1897Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
