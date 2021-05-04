import { TestBed } from '@angular/core/testing';

import { Experimental1526Service } from './experimental1526.service';

describe('Experimental1526Service', () => {
  let service: Experimental1526Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1526Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
