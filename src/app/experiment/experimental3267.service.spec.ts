import { TestBed } from '@angular/core/testing';

import { Experimental3267Service } from './experimental3267.service';

describe('Experimental3267Service', () => {
  let service: Experimental3267Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3267Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
