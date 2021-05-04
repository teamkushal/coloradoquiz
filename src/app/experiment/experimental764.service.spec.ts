import { TestBed } from '@angular/core/testing';

import { Experimental764Service } from './experimental764.service';

describe('Experimental764Service', () => {
  let service: Experimental764Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental764Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
