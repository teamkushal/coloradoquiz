import { TestBed } from '@angular/core/testing';

import { Experimental3986Service } from './experimental3986.service';

describe('Experimental3986Service', () => {
  let service: Experimental3986Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3986Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
