import { TestBed } from '@angular/core/testing';

import { Experimental3395Service } from './experimental3395.service';

describe('Experimental3395Service', () => {
  let service: Experimental3395Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3395Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
