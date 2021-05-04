import { TestBed } from '@angular/core/testing';

import { Experimental3993Service } from './experimental3993.service';

describe('Experimental3993Service', () => {
  let service: Experimental3993Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3993Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
