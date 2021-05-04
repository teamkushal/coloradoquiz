import { TestBed } from '@angular/core/testing';

import { Experimental2961Service } from './experimental2961.service';

describe('Experimental2961Service', () => {
  let service: Experimental2961Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2961Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
