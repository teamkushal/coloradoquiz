import { TestBed } from '@angular/core/testing';

import { Experimental1807Service } from './experimental1807.service';

describe('Experimental1807Service', () => {
  let service: Experimental1807Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1807Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
