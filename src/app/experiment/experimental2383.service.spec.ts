import { TestBed } from '@angular/core/testing';

import { Experimental2383Service } from './experimental2383.service';

describe('Experimental2383Service', () => {
  let service: Experimental2383Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2383Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
