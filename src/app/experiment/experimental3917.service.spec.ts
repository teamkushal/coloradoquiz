import { TestBed } from '@angular/core/testing';

import { Experimental3917Service } from './experimental3917.service';

describe('Experimental3917Service', () => {
  let service: Experimental3917Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3917Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
