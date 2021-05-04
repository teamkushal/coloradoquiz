import { TestBed } from '@angular/core/testing';

import { Experimental3578Service } from './experimental3578.service';

describe('Experimental3578Service', () => {
  let service: Experimental3578Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3578Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
