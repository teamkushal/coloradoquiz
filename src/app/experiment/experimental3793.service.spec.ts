import { TestBed } from '@angular/core/testing';

import { Experimental3793Service } from './experimental3793.service';

describe('Experimental3793Service', () => {
  let service: Experimental3793Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3793Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
