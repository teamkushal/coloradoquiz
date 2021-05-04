import { TestBed } from '@angular/core/testing';

import { Experimental2490Service } from './experimental2490.service';

describe('Experimental2490Service', () => {
  let service: Experimental2490Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2490Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
