import { TestBed } from '@angular/core/testing';

import { Experimental1611Service } from './experimental1611.service';

describe('Experimental1611Service', () => {
  let service: Experimental1611Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1611Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
