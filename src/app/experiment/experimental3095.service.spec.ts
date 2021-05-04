import { TestBed } from '@angular/core/testing';

import { Experimental3095Service } from './experimental3095.service';

describe('Experimental3095Service', () => {
  let service: Experimental3095Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3095Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
