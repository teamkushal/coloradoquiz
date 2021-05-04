import { TestBed } from '@angular/core/testing';

import { Experimental3507Service } from './experimental3507.service';

describe('Experimental3507Service', () => {
  let service: Experimental3507Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3507Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
