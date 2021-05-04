import { TestBed } from '@angular/core/testing';

import { Experimental3246Service } from './experimental3246.service';

describe('Experimental3246Service', () => {
  let service: Experimental3246Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3246Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
