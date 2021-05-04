import { TestBed } from '@angular/core/testing';

import { Experimental3508Service } from './experimental3508.service';

describe('Experimental3508Service', () => {
  let service: Experimental3508Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3508Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
