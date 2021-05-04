import { TestBed } from '@angular/core/testing';

import { Experimental3179Service } from './experimental3179.service';

describe('Experimental3179Service', () => {
  let service: Experimental3179Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3179Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
