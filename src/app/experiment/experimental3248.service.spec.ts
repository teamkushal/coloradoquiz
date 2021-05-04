import { TestBed } from '@angular/core/testing';

import { Experimental3248Service } from './experimental3248.service';

describe('Experimental3248Service', () => {
  let service: Experimental3248Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3248Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
