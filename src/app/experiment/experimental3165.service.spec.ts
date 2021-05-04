import { TestBed } from '@angular/core/testing';

import { Experimental3165Service } from './experimental3165.service';

describe('Experimental3165Service', () => {
  let service: Experimental3165Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3165Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
