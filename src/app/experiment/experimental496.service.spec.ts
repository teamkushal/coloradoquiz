import { TestBed } from '@angular/core/testing';

import { Experimental496Service } from './experimental496.service';

describe('Experimental496Service', () => {
  let service: Experimental496Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental496Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
