import { TestBed } from '@angular/core/testing';

import { Experimental2427Service } from './experimental2427.service';

describe('Experimental2427Service', () => {
  let service: Experimental2427Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2427Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
