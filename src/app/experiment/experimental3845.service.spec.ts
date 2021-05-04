import { TestBed } from '@angular/core/testing';

import { Experimental3845Service } from './experimental3845.service';

describe('Experimental3845Service', () => {
  let service: Experimental3845Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3845Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
