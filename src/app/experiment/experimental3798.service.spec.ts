import { TestBed } from '@angular/core/testing';

import { Experimental3798Service } from './experimental3798.service';

describe('Experimental3798Service', () => {
  let service: Experimental3798Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3798Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
