import { TestBed } from '@angular/core/testing';

import { Experimental1845Service } from './experimental1845.service';

describe('Experimental1845Service', () => {
  let service: Experimental1845Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1845Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
