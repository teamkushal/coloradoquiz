import { TestBed } from '@angular/core/testing';

import { Experimental3656Service } from './experimental3656.service';

describe('Experimental3656Service', () => {
  let service: Experimental3656Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3656Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
