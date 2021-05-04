import { TestBed } from '@angular/core/testing';

import { Experimental1140Service } from './experimental1140.service';

describe('Experimental1140Service', () => {
  let service: Experimental1140Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1140Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
