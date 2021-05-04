import { TestBed } from '@angular/core/testing';

import { Experimental2346Service } from './experimental2346.service';

describe('Experimental2346Service', () => {
  let service: Experimental2346Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2346Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
