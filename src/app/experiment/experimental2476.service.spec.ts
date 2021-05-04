import { TestBed } from '@angular/core/testing';

import { Experimental2476Service } from './experimental2476.service';

describe('Experimental2476Service', () => {
  let service: Experimental2476Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2476Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
