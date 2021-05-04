import { TestBed } from '@angular/core/testing';

import { Experimental3280Service } from './experimental3280.service';

describe('Experimental3280Service', () => {
  let service: Experimental3280Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3280Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
