import { TestBed } from '@angular/core/testing';

import { Experimental3666Service } from './experimental3666.service';

describe('Experimental3666Service', () => {
  let service: Experimental3666Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3666Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
