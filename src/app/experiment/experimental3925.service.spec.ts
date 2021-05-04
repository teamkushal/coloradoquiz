import { TestBed } from '@angular/core/testing';

import { Experimental3925Service } from './experimental3925.service';

describe('Experimental3925Service', () => {
  let service: Experimental3925Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3925Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
