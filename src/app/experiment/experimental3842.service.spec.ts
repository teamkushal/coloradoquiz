import { TestBed } from '@angular/core/testing';

import { Experimental3842Service } from './experimental3842.service';

describe('Experimental3842Service', () => {
  let service: Experimental3842Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3842Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
