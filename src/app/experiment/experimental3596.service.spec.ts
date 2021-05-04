import { TestBed } from '@angular/core/testing';

import { Experimental3596Service } from './experimental3596.service';

describe('Experimental3596Service', () => {
  let service: Experimental3596Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3596Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
