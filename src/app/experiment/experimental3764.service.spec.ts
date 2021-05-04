import { TestBed } from '@angular/core/testing';

import { Experimental3764Service } from './experimental3764.service';

describe('Experimental3764Service', () => {
  let service: Experimental3764Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3764Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
