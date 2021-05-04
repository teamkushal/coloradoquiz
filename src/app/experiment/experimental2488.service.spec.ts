import { TestBed } from '@angular/core/testing';

import { Experimental2488Service } from './experimental2488.service';

describe('Experimental2488Service', () => {
  let service: Experimental2488Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2488Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
