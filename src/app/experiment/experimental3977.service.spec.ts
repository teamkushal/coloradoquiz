import { TestBed } from '@angular/core/testing';

import { Experimental3977Service } from './experimental3977.service';

describe('Experimental3977Service', () => {
  let service: Experimental3977Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3977Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
