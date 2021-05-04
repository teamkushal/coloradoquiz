import { TestBed } from '@angular/core/testing';

import { Experimental818Service } from './experimental818.service';

describe('Experimental818Service', () => {
  let service: Experimental818Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental818Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
