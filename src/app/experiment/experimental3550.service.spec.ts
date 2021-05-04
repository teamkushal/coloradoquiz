import { TestBed } from '@angular/core/testing';

import { Experimental3550Service } from './experimental3550.service';

describe('Experimental3550Service', () => {
  let service: Experimental3550Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3550Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
