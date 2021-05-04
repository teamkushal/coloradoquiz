import { TestBed } from '@angular/core/testing';

import { Experimental3980Service } from './experimental3980.service';

describe('Experimental3980Service', () => {
  let service: Experimental3980Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3980Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
