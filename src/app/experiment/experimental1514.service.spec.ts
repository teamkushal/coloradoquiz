import { TestBed } from '@angular/core/testing';

import { Experimental1514Service } from './experimental1514.service';

describe('Experimental1514Service', () => {
  let service: Experimental1514Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1514Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
