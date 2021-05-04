import { TestBed } from '@angular/core/testing';

import { Experimental3832Service } from './experimental3832.service';

describe('Experimental3832Service', () => {
  let service: Experimental3832Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3832Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
