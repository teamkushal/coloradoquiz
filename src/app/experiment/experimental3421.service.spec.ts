import { TestBed } from '@angular/core/testing';

import { Experimental3421Service } from './experimental3421.service';

describe('Experimental3421Service', () => {
  let service: Experimental3421Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3421Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
