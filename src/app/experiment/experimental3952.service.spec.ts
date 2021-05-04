import { TestBed } from '@angular/core/testing';

import { Experimental3952Service } from './experimental3952.service';

describe('Experimental3952Service', () => {
  let service: Experimental3952Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3952Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
