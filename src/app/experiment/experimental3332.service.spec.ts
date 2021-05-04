import { TestBed } from '@angular/core/testing';

import { Experimental3332Service } from './experimental3332.service';

describe('Experimental3332Service', () => {
  let service: Experimental3332Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3332Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
