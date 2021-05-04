import { TestBed } from '@angular/core/testing';

import { Experimental2828Service } from './experimental2828.service';

describe('Experimental2828Service', () => {
  let service: Experimental2828Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2828Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
