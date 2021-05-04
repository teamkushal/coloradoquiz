import { TestBed } from '@angular/core/testing';

import { Experimental3988Service } from './experimental3988.service';

describe('Experimental3988Service', () => {
  let service: Experimental3988Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3988Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
