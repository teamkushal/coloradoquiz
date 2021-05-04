import { TestBed } from '@angular/core/testing';

import { Experimental3784Service } from './experimental3784.service';

describe('Experimental3784Service', () => {
  let service: Experimental3784Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3784Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
