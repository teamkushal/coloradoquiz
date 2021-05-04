import { TestBed } from '@angular/core/testing';

import { Experimental2406Service } from './experimental2406.service';

describe('Experimental2406Service', () => {
  let service: Experimental2406Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2406Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
