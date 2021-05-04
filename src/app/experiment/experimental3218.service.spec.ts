import { TestBed } from '@angular/core/testing';

import { Experimental3218Service } from './experimental3218.service';

describe('Experimental3218Service', () => {
  let service: Experimental3218Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3218Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
