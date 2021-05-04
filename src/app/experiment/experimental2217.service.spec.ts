import { TestBed } from '@angular/core/testing';

import { Experimental2217Service } from './experimental2217.service';

describe('Experimental2217Service', () => {
  let service: Experimental2217Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2217Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
