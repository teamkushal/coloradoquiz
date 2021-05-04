import { TestBed } from '@angular/core/testing';

import { Experimental3910Service } from './experimental3910.service';

describe('Experimental3910Service', () => {
  let service: Experimental3910Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3910Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
