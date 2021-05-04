import { TestBed } from '@angular/core/testing';

import { Experimental1064Service } from './experimental1064.service';

describe('Experimental1064Service', () => {
  let service: Experimental1064Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1064Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
