import { TestBed } from '@angular/core/testing';

import { Experimental2587Service } from './experimental2587.service';

describe('Experimental2587Service', () => {
  let service: Experimental2587Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2587Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
