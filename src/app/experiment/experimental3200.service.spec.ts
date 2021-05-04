import { TestBed } from '@angular/core/testing';

import { Experimental3200Service } from './experimental3200.service';

describe('Experimental3200Service', () => {
  let service: Experimental3200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
