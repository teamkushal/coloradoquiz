import { TestBed } from '@angular/core/testing';

import { Experimental3283Service } from './experimental3283.service';

describe('Experimental3283Service', () => {
  let service: Experimental3283Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3283Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
