import { TestBed } from '@angular/core/testing';

import { Experimental3123Service } from './experimental3123.service';

describe('Experimental3123Service', () => {
  let service: Experimental3123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
