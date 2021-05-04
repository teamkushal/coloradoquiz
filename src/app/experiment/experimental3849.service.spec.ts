import { TestBed } from '@angular/core/testing';

import { Experimental3849Service } from './experimental3849.service';

describe('Experimental3849Service', () => {
  let service: Experimental3849Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3849Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
