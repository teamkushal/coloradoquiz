import { TestBed } from '@angular/core/testing';

import { Experimental3070Service } from './experimental3070.service';

describe('Experimental3070Service', () => {
  let service: Experimental3070Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3070Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
