import { TestBed } from '@angular/core/testing';

import { Experimental975Service } from './experimental975.service';

describe('Experimental975Service', () => {
  let service: Experimental975Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental975Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
