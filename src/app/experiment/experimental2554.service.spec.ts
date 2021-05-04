import { TestBed } from '@angular/core/testing';

import { Experimental2554Service } from './experimental2554.service';

describe('Experimental2554Service', () => {
  let service: Experimental2554Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2554Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
