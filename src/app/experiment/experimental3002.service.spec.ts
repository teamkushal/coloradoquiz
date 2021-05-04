import { TestBed } from '@angular/core/testing';

import { Experimental3002Service } from './experimental3002.service';

describe('Experimental3002Service', () => {
  let service: Experimental3002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
