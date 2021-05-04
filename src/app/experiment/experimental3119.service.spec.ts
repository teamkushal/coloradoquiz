import { TestBed } from '@angular/core/testing';

import { Experimental3119Service } from './experimental3119.service';

describe('Experimental3119Service', () => {
  let service: Experimental3119Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3119Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
