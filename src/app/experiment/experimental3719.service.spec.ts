import { TestBed } from '@angular/core/testing';

import { Experimental3719Service } from './experimental3719.service';

describe('Experimental3719Service', () => {
  let service: Experimental3719Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3719Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
