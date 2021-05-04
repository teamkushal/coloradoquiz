import { TestBed } from '@angular/core/testing';

import { Experimental875Service } from './experimental875.service';

describe('Experimental875Service', () => {
  let service: Experimental875Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental875Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
