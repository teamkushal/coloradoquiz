import { TestBed } from '@angular/core/testing';

import { Experimental3036Service } from './experimental3036.service';

describe('Experimental3036Service', () => {
  let service: Experimental3036Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3036Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
