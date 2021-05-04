import { TestBed } from '@angular/core/testing';

import { Experimental1086Service } from './experimental1086.service';

describe('Experimental1086Service', () => {
  let service: Experimental1086Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1086Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
