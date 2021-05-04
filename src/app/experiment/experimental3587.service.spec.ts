import { TestBed } from '@angular/core/testing';

import { Experimental3587Service } from './experimental3587.service';

describe('Experimental3587Service', () => {
  let service: Experimental3587Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3587Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
