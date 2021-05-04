import { TestBed } from '@angular/core/testing';

import { Experimental2853Service } from './experimental2853.service';

describe('Experimental2853Service', () => {
  let service: Experimental2853Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2853Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
