import { TestBed } from '@angular/core/testing';

import { Experimental1068Service } from './experimental1068.service';

describe('Experimental1068Service', () => {
  let service: Experimental1068Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1068Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
