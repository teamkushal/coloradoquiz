import { TestBed } from '@angular/core/testing';

import { Experimental3461Service } from './experimental3461.service';

describe('Experimental3461Service', () => {
  let service: Experimental3461Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3461Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
