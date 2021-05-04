import { TestBed } from '@angular/core/testing';

import { Experimental149Service } from './experimental149.service';

describe('Experimental149Service', () => {
  let service: Experimental149Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental149Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
