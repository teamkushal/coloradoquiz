import { TestBed } from '@angular/core/testing';

import { Experimental3472Service } from './experimental3472.service';

describe('Experimental3472Service', () => {
  let service: Experimental3472Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3472Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
