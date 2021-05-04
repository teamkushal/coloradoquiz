import { TestBed } from '@angular/core/testing';

import { Experimental3802Service } from './experimental3802.service';

describe('Experimental3802Service', () => {
  let service: Experimental3802Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3802Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
