import { TestBed } from '@angular/core/testing';

import { Experimental3201Service } from './experimental3201.service';

describe('Experimental3201Service', () => {
  let service: Experimental3201Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3201Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
