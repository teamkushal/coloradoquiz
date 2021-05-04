import { TestBed } from '@angular/core/testing';

import { Experimental3935Service } from './experimental3935.service';

describe('Experimental3935Service', () => {
  let service: Experimental3935Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3935Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
