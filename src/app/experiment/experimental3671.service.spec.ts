import { TestBed } from '@angular/core/testing';

import { Experimental3671Service } from './experimental3671.service';

describe('Experimental3671Service', () => {
  let service: Experimental3671Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3671Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
