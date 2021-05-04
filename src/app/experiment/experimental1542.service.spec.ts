import { TestBed } from '@angular/core/testing';

import { Experimental1542Service } from './experimental1542.service';

describe('Experimental1542Service', () => {
  let service: Experimental1542Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1542Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
