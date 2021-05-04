import { TestBed } from '@angular/core/testing';

import { Experimental3323Service } from './experimental3323.service';

describe('Experimental3323Service', () => {
  let service: Experimental3323Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3323Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
