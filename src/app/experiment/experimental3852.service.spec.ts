import { TestBed } from '@angular/core/testing';

import { Experimental3852Service } from './experimental3852.service';

describe('Experimental3852Service', () => {
  let service: Experimental3852Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3852Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
