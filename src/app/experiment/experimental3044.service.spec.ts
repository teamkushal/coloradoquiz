import { TestBed } from '@angular/core/testing';

import { Experimental3044Service } from './experimental3044.service';

describe('Experimental3044Service', () => {
  let service: Experimental3044Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3044Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
