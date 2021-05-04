import { TestBed } from '@angular/core/testing';

import { Experimental2397Service } from './experimental2397.service';

describe('Experimental2397Service', () => {
  let service: Experimental2397Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2397Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
