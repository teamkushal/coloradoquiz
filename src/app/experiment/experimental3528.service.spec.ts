import { TestBed } from '@angular/core/testing';

import { Experimental3528Service } from './experimental3528.service';

describe('Experimental3528Service', () => {
  let service: Experimental3528Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3528Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
