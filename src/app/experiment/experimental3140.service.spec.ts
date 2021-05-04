import { TestBed } from '@angular/core/testing';

import { Experimental3140Service } from './experimental3140.service';

describe('Experimental3140Service', () => {
  let service: Experimental3140Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3140Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
