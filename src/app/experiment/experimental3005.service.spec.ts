import { TestBed } from '@angular/core/testing';

import { Experimental3005Service } from './experimental3005.service';

describe('Experimental3005Service', () => {
  let service: Experimental3005Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3005Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
