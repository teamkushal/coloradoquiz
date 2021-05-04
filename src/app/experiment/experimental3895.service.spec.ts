import { TestBed } from '@angular/core/testing';

import { Experimental3895Service } from './experimental3895.service';

describe('Experimental3895Service', () => {
  let service: Experimental3895Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3895Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
