import { TestBed } from '@angular/core/testing';

import { Experimental3147Service } from './experimental3147.service';

describe('Experimental3147Service', () => {
  let service: Experimental3147Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3147Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
