import { TestBed } from '@angular/core/testing';

import { Experimental2980Service } from './experimental2980.service';

describe('Experimental2980Service', () => {
  let service: Experimental2980Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2980Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
