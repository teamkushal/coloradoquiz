import { TestBed } from '@angular/core/testing';

import { Experimental3288Service } from './experimental3288.service';

describe('Experimental3288Service', () => {
  let service: Experimental3288Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3288Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
