import { TestBed } from '@angular/core/testing';

import { Experimental3879Service } from './experimental3879.service';

describe('Experimental3879Service', () => {
  let service: Experimental3879Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3879Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
