import { TestBed } from '@angular/core/testing';

import { Experimental1371Service } from './experimental1371.service';

describe('Experimental1371Service', () => {
  let service: Experimental1371Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1371Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
