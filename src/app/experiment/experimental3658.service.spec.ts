import { TestBed } from '@angular/core/testing';

import { Experimental3658Service } from './experimental3658.service';

describe('Experimental3658Service', () => {
  let service: Experimental3658Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3658Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
