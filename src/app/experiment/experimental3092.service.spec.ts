import { TestBed } from '@angular/core/testing';

import { Experimental3092Service } from './experimental3092.service';

describe('Experimental3092Service', () => {
  let service: Experimental3092Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3092Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
