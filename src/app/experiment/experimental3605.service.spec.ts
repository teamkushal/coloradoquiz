import { TestBed } from '@angular/core/testing';

import { Experimental3605Service } from './experimental3605.service';

describe('Experimental3605Service', () => {
  let service: Experimental3605Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3605Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
