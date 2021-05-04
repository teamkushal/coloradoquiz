import { TestBed } from '@angular/core/testing';

import { Experimental3021Service } from './experimental3021.service';

describe('Experimental3021Service', () => {
  let service: Experimental3021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
