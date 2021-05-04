import { TestBed } from '@angular/core/testing';

import { Experimental3265Service } from './experimental3265.service';

describe('Experimental3265Service', () => {
  let service: Experimental3265Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3265Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
