import { TestBed } from '@angular/core/testing';

import { Experimental1201Service } from './experimental1201.service';

describe('Experimental1201Service', () => {
  let service: Experimental1201Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1201Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
