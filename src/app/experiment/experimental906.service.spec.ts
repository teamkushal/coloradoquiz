import { TestBed } from '@angular/core/testing';

import { Experimental906Service } from './experimental906.service';

describe('Experimental906Service', () => {
  let service: Experimental906Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental906Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
