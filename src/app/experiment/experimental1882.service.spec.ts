import { TestBed } from '@angular/core/testing';

import { Experimental1882Service } from './experimental1882.service';

describe('Experimental1882Service', () => {
  let service: Experimental1882Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1882Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
