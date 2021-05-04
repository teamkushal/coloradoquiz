import { TestBed } from '@angular/core/testing';

import { Experimental3715Service } from './experimental3715.service';

describe('Experimental3715Service', () => {
  let service: Experimental3715Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3715Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
