import { TestBed } from '@angular/core/testing';

import { Experimental3346Service } from './experimental3346.service';

describe('Experimental3346Service', () => {
  let service: Experimental3346Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3346Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
