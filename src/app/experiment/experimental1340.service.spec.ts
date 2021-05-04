import { TestBed } from '@angular/core/testing';

import { Experimental1340Service } from './experimental1340.service';

describe('Experimental1340Service', () => {
  let service: Experimental1340Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1340Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
