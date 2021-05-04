import { TestBed } from '@angular/core/testing';

import { Experimental3783Service } from './experimental3783.service';

describe('Experimental3783Service', () => {
  let service: Experimental3783Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3783Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
