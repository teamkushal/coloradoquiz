import { TestBed } from '@angular/core/testing';

import { Experimental3506Service } from './experimental3506.service';

describe('Experimental3506Service', () => {
  let service: Experimental3506Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3506Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
