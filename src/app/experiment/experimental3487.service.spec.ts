import { TestBed } from '@angular/core/testing';

import { Experimental3487Service } from './experimental3487.service';

describe('Experimental3487Service', () => {
  let service: Experimental3487Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3487Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
