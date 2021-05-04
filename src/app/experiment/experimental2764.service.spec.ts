import { TestBed } from '@angular/core/testing';

import { Experimental2764Service } from './experimental2764.service';

describe('Experimental2764Service', () => {
  let service: Experimental2764Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2764Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
