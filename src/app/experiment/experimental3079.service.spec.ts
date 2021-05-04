import { TestBed } from '@angular/core/testing';

import { Experimental3079Service } from './experimental3079.service';

describe('Experimental3079Service', () => {
  let service: Experimental3079Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3079Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
