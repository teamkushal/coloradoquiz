import { TestBed } from '@angular/core/testing';

import { Experimental1674Service } from './experimental1674.service';

describe('Experimental1674Service', () => {
  let service: Experimental1674Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1674Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
