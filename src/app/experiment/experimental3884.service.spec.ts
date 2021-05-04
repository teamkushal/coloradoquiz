import { TestBed } from '@angular/core/testing';

import { Experimental3884Service } from './experimental3884.service';

describe('Experimental3884Service', () => {
  let service: Experimental3884Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3884Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
