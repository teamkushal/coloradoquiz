import { TestBed } from '@angular/core/testing';

import { Experimental3806Service } from './experimental3806.service';

describe('Experimental3806Service', () => {
  let service: Experimental3806Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3806Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
