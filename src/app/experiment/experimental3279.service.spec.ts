import { TestBed } from '@angular/core/testing';

import { Experimental3279Service } from './experimental3279.service';

describe('Experimental3279Service', () => {
  let service: Experimental3279Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3279Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
