import { TestBed } from '@angular/core/testing';

import { Experimental3486Service } from './experimental3486.service';

describe('Experimental3486Service', () => {
  let service: Experimental3486Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3486Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
