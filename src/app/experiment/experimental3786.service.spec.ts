import { TestBed } from '@angular/core/testing';

import { Experimental3786Service } from './experimental3786.service';

describe('Experimental3786Service', () => {
  let service: Experimental3786Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3786Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
