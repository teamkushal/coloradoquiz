import { TestBed } from '@angular/core/testing';

import { Experimental2652Service } from './experimental2652.service';

describe('Experimental2652Service', () => {
  let service: Experimental2652Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2652Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
