import { TestBed } from '@angular/core/testing';

import { Experimental1171Service } from './experimental1171.service';

describe('Experimental1171Service', () => {
  let service: Experimental1171Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1171Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
