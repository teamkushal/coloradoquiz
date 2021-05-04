import { TestBed } from '@angular/core/testing';

import { Experimental3865Service } from './experimental3865.service';

describe('Experimental3865Service', () => {
  let service: Experimental3865Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3865Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
