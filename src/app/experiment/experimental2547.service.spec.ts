import { TestBed } from '@angular/core/testing';

import { Experimental2547Service } from './experimental2547.service';

describe('Experimental2547Service', () => {
  let service: Experimental2547Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2547Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
