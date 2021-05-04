import { TestBed } from '@angular/core/testing';

import { Experimental3181Service } from './experimental3181.service';

describe('Experimental3181Service', () => {
  let service: Experimental3181Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3181Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
