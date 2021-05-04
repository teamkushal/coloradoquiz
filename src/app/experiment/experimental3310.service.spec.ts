import { TestBed } from '@angular/core/testing';

import { Experimental3310Service } from './experimental3310.service';

describe('Experimental3310Service', () => {
  let service: Experimental3310Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3310Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
