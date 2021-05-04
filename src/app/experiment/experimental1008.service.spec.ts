import { TestBed } from '@angular/core/testing';

import { Experimental1008Service } from './experimental1008.service';

describe('Experimental1008Service', () => {
  let service: Experimental1008Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1008Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
