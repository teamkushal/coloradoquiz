import { TestBed } from '@angular/core/testing';

import { Experimental3368Service } from './experimental3368.service';

describe('Experimental3368Service', () => {
  let service: Experimental3368Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3368Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
