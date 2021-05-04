import { TestBed } from '@angular/core/testing';

import { Experimental3705Service } from './experimental3705.service';

describe('Experimental3705Service', () => {
  let service: Experimental3705Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3705Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
