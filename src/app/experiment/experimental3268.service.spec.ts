import { TestBed } from '@angular/core/testing';

import { Experimental3268Service } from './experimental3268.service';

describe('Experimental3268Service', () => {
  let service: Experimental3268Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3268Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
