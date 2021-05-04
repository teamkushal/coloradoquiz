import { TestBed } from '@angular/core/testing';

import { Experimental3173Service } from './experimental3173.service';

describe('Experimental3173Service', () => {
  let service: Experimental3173Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3173Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
