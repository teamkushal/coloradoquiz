import { TestBed } from '@angular/core/testing';

import { Experimental2107Service } from './experimental2107.service';

describe('Experimental2107Service', () => {
  let service: Experimental2107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
