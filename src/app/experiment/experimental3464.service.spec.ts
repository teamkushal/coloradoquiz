import { TestBed } from '@angular/core/testing';

import { Experimental3464Service } from './experimental3464.service';

describe('Experimental3464Service', () => {
  let service: Experimental3464Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3464Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
