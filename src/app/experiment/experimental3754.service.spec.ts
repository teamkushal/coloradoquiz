import { TestBed } from '@angular/core/testing';

import { Experimental3754Service } from './experimental3754.service';

describe('Experimental3754Service', () => {
  let service: Experimental3754Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3754Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
