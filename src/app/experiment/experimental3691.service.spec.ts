import { TestBed } from '@angular/core/testing';

import { Experimental3691Service } from './experimental3691.service';

describe('Experimental3691Service', () => {
  let service: Experimental3691Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3691Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
