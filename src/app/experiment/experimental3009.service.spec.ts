import { TestBed } from '@angular/core/testing';

import { Experimental3009Service } from './experimental3009.service';

describe('Experimental3009Service', () => {
  let service: Experimental3009Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3009Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
