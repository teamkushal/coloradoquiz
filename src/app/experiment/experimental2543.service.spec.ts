import { TestBed } from '@angular/core/testing';

import { Experimental2543Service } from './experimental2543.service';

describe('Experimental2543Service', () => {
  let service: Experimental2543Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2543Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
