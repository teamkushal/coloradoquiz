import { TestBed } from '@angular/core/testing';

import { Experimental3291Service } from './experimental3291.service';

describe('Experimental3291Service', () => {
  let service: Experimental3291Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3291Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
