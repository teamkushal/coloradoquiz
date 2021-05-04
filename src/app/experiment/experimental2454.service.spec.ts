import { TestBed } from '@angular/core/testing';

import { Experimental2454Service } from './experimental2454.service';

describe('Experimental2454Service', () => {
  let service: Experimental2454Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2454Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
