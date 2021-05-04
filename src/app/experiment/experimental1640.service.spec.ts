import { TestBed } from '@angular/core/testing';

import { Experimental1640Service } from './experimental1640.service';

describe('Experimental1640Service', () => {
  let service: Experimental1640Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1640Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
