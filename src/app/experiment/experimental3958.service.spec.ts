import { TestBed } from '@angular/core/testing';

import { Experimental3958Service } from './experimental3958.service';

describe('Experimental3958Service', () => {
  let service: Experimental3958Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3958Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
