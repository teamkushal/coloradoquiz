import { TestBed } from '@angular/core/testing';

import { Experimental2786Service } from './experimental2786.service';

describe('Experimental2786Service', () => {
  let service: Experimental2786Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2786Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
