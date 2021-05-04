import { TestBed } from '@angular/core/testing';

import { Experimental1059Service } from './experimental1059.service';

describe('Experimental1059Service', () => {
  let service: Experimental1059Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1059Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
