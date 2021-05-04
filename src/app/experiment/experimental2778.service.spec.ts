import { TestBed } from '@angular/core/testing';

import { Experimental2778Service } from './experimental2778.service';

describe('Experimental2778Service', () => {
  let service: Experimental2778Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2778Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
