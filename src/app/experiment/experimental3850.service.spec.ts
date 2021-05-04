import { TestBed } from '@angular/core/testing';

import { Experimental3850Service } from './experimental3850.service';

describe('Experimental3850Service', () => {
  let service: Experimental3850Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3850Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
