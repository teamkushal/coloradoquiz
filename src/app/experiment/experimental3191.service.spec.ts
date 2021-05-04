import { TestBed } from '@angular/core/testing';

import { Experimental3191Service } from './experimental3191.service';

describe('Experimental3191Service', () => {
  let service: Experimental3191Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3191Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
