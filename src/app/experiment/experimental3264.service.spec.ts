import { TestBed } from '@angular/core/testing';

import { Experimental3264Service } from './experimental3264.service';

describe('Experimental3264Service', () => {
  let service: Experimental3264Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3264Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
