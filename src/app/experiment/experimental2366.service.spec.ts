import { TestBed } from '@angular/core/testing';

import { Experimental2366Service } from './experimental2366.service';

describe('Experimental2366Service', () => {
  let service: Experimental2366Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2366Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
