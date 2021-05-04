import { TestBed } from '@angular/core/testing';

import { Experimental3873Service } from './experimental3873.service';

describe('Experimental3873Service', () => {
  let service: Experimental3873Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3873Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
