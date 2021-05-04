import { TestBed } from '@angular/core/testing';

import { Experimental1286Service } from './experimental1286.service';

describe('Experimental1286Service', () => {
  let service: Experimental1286Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1286Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
