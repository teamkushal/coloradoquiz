import { TestBed } from '@angular/core/testing';

import { Experimental3864Service } from './experimental3864.service';

describe('Experimental3864Service', () => {
  let service: Experimental3864Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3864Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
