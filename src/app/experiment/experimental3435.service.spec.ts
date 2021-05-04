import { TestBed } from '@angular/core/testing';

import { Experimental3435Service } from './experimental3435.service';

describe('Experimental3435Service', () => {
  let service: Experimental3435Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3435Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
