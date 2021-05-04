import { TestBed } from '@angular/core/testing';

import { Experimental3182Service } from './experimental3182.service';

describe('Experimental3182Service', () => {
  let service: Experimental3182Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3182Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
