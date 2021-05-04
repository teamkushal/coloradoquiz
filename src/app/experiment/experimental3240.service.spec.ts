import { TestBed } from '@angular/core/testing';

import { Experimental3240Service } from './experimental3240.service';

describe('Experimental3240Service', () => {
  let service: Experimental3240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
