import { TestBed } from '@angular/core/testing';

import { Experimental3011Service } from './experimental3011.service';

describe('Experimental3011Service', () => {
  let service: Experimental3011Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3011Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
