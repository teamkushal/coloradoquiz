import { TestBed } from '@angular/core/testing';

import { Experimental3749Service } from './experimental3749.service';

describe('Experimental3749Service', () => {
  let service: Experimental3749Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3749Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
