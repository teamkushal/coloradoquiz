import { TestBed } from '@angular/core/testing';

import { Experimental3237Service } from './experimental3237.service';

describe('Experimental3237Service', () => {
  let service: Experimental3237Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3237Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
