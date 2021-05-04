import { TestBed } from '@angular/core/testing';

import { Experimental3359Service } from './experimental3359.service';

describe('Experimental3359Service', () => {
  let service: Experimental3359Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3359Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
