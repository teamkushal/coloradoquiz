import { TestBed } from '@angular/core/testing';

import { Experimental2530Service } from './experimental2530.service';

describe('Experimental2530Service', () => {
  let service: Experimental2530Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2530Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
