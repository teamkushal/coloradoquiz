import { TestBed } from '@angular/core/testing';

import { Experimental3694Service } from './experimental3694.service';

describe('Experimental3694Service', () => {
  let service: Experimental3694Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3694Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
