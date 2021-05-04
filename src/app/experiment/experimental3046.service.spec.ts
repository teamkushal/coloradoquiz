import { TestBed } from '@angular/core/testing';

import { Experimental3046Service } from './experimental3046.service';

describe('Experimental3046Service', () => {
  let service: Experimental3046Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3046Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
