import { TestBed } from '@angular/core/testing';

import { Experimental3238Service } from './experimental3238.service';

describe('Experimental3238Service', () => {
  let service: Experimental3238Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3238Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
