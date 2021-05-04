import { TestBed } from '@angular/core/testing';

import { Experimental166Service } from './experimental166.service';

describe('Experimental166Service', () => {
  let service: Experimental166Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental166Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
