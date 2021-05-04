import { TestBed } from '@angular/core/testing';

import { Experimental3907Service } from './experimental3907.service';

describe('Experimental3907Service', () => {
  let service: Experimental3907Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3907Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
