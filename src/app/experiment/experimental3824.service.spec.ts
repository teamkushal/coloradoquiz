import { TestBed } from '@angular/core/testing';

import { Experimental3824Service } from './experimental3824.service';

describe('Experimental3824Service', () => {
  let service: Experimental3824Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3824Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
