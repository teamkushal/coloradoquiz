import { TestBed } from '@angular/core/testing';

import { Experimental3979Service } from './experimental3979.service';

describe('Experimental3979Service', () => {
  let service: Experimental3979Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3979Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
