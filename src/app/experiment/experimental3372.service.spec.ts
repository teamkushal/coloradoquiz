import { TestBed } from '@angular/core/testing';

import { Experimental3372Service } from './experimental3372.service';

describe('Experimental3372Service', () => {
  let service: Experimental3372Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3372Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
