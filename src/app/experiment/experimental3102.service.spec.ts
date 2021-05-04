import { TestBed } from '@angular/core/testing';

import { Experimental3102Service } from './experimental3102.service';

describe('Experimental3102Service', () => {
  let service: Experimental3102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
