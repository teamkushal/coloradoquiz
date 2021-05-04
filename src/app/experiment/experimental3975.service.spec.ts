import { TestBed } from '@angular/core/testing';

import { Experimental3975Service } from './experimental3975.service';

describe('Experimental3975Service', () => {
  let service: Experimental3975Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3975Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
