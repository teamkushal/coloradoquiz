import { TestBed } from '@angular/core/testing';

import { Experimental3965Service } from './experimental3965.service';

describe('Experimental3965Service', () => {
  let service: Experimental3965Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3965Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
