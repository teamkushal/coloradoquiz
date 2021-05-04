import { TestBed } from '@angular/core/testing';

import { Experimental3188Service } from './experimental3188.service';

describe('Experimental3188Service', () => {
  let service: Experimental3188Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3188Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
