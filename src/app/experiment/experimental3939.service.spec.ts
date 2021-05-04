import { TestBed } from '@angular/core/testing';

import { Experimental3939Service } from './experimental3939.service';

describe('Experimental3939Service', () => {
  let service: Experimental3939Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3939Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
