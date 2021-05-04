import { TestBed } from '@angular/core/testing';

import { Experimental3904Service } from './experimental3904.service';

describe('Experimental3904Service', () => {
  let service: Experimental3904Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3904Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
