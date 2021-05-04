import { TestBed } from '@angular/core/testing';

import { Experimental3541Service } from './experimental3541.service';

describe('Experimental3541Service', () => {
  let service: Experimental3541Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3541Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
