import { TestBed } from '@angular/core/testing';

import { Experimental3048Service } from './experimental3048.service';

describe('Experimental3048Service', () => {
  let service: Experimental3048Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3048Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
