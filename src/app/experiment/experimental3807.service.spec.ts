import { TestBed } from '@angular/core/testing';

import { Experimental3807Service } from './experimental3807.service';

describe('Experimental3807Service', () => {
  let service: Experimental3807Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3807Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
