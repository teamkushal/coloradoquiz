import { TestBed } from '@angular/core/testing';

import { Experimental797Service } from './experimental797.service';

describe('Experimental797Service', () => {
  let service: Experimental797Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental797Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
