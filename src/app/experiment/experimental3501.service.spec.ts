import { TestBed } from '@angular/core/testing';

import { Experimental3501Service } from './experimental3501.service';

describe('Experimental3501Service', () => {
  let service: Experimental3501Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3501Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
