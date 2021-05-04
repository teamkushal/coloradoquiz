import { TestBed } from '@angular/core/testing';

import { Experimental3906Service } from './experimental3906.service';

describe('Experimental3906Service', () => {
  let service: Experimental3906Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3906Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
