import { TestBed } from '@angular/core/testing';

import { Experimental3126Service } from './experimental3126.service';

describe('Experimental3126Service', () => {
  let service: Experimental3126Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3126Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
