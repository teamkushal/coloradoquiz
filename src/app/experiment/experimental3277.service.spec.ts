import { TestBed } from '@angular/core/testing';

import { Experimental3277Service } from './experimental3277.service';

describe('Experimental3277Service', () => {
  let service: Experimental3277Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3277Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
