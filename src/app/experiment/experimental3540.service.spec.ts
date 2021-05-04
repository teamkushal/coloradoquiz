import { TestBed } from '@angular/core/testing';

import { Experimental3540Service } from './experimental3540.service';

describe('Experimental3540Service', () => {
  let service: Experimental3540Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3540Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
