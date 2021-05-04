import { TestBed } from '@angular/core/testing';

import { Experimental879Service } from './experimental879.service';

describe('Experimental879Service', () => {
  let service: Experimental879Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental879Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
