import { TestBed } from '@angular/core/testing';

import { Experimental3644Service } from './experimental3644.service';

describe('Experimental3644Service', () => {
  let service: Experimental3644Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3644Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
