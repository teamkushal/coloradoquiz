import { TestBed } from '@angular/core/testing';

import { Experimental3662Service } from './experimental3662.service';

describe('Experimental3662Service', () => {
  let service: Experimental3662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
