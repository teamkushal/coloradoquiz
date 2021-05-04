import { TestBed } from '@angular/core/testing';

import { Experimental3274Service } from './experimental3274.service';

describe('Experimental3274Service', () => {
  let service: Experimental3274Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3274Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
