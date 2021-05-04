import { TestBed } from '@angular/core/testing';

import { Experimental3650Service } from './experimental3650.service';

describe('Experimental3650Service', () => {
  let service: Experimental3650Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3650Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
