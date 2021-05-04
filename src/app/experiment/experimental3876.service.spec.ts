import { TestBed } from '@angular/core/testing';

import { Experimental3876Service } from './experimental3876.service';

describe('Experimental3876Service', () => {
  let service: Experimental3876Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3876Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
