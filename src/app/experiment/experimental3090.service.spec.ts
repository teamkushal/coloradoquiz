import { TestBed } from '@angular/core/testing';

import { Experimental3090Service } from './experimental3090.service';

describe('Experimental3090Service', () => {
  let service: Experimental3090Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3090Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
