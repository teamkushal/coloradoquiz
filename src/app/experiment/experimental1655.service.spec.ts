import { TestBed } from '@angular/core/testing';

import { Experimental1655Service } from './experimental1655.service';

describe('Experimental1655Service', () => {
  let service: Experimental1655Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1655Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
