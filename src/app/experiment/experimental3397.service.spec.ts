import { TestBed } from '@angular/core/testing';

import { Experimental3397Service } from './experimental3397.service';

describe('Experimental3397Service', () => {
  let service: Experimental3397Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3397Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
