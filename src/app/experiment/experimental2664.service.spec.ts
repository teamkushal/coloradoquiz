import { TestBed } from '@angular/core/testing';

import { Experimental2664Service } from './experimental2664.service';

describe('Experimental2664Service', () => {
  let service: Experimental2664Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2664Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
