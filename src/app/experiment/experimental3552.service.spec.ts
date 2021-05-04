import { TestBed } from '@angular/core/testing';

import { Experimental3552Service } from './experimental3552.service';

describe('Experimental3552Service', () => {
  let service: Experimental3552Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3552Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
