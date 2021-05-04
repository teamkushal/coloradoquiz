import { TestBed } from '@angular/core/testing';

import { Experimental3392Service } from './experimental3392.service';

describe('Experimental3392Service', () => {
  let service: Experimental3392Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3392Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
