import { TestBed } from '@angular/core/testing';

import { Experimental3868Service } from './experimental3868.service';

describe('Experimental3868Service', () => {
  let service: Experimental3868Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3868Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
