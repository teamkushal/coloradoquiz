import { TestBed } from '@angular/core/testing';

import { Experimental3714Service } from './experimental3714.service';

describe('Experimental3714Service', () => {
  let service: Experimental3714Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3714Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
