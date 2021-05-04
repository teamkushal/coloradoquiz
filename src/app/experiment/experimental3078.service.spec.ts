import { TestBed } from '@angular/core/testing';

import { Experimental3078Service } from './experimental3078.service';

describe('Experimental3078Service', () => {
  let service: Experimental3078Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3078Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
