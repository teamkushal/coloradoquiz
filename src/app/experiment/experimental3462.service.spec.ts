import { TestBed } from '@angular/core/testing';

import { Experimental3462Service } from './experimental3462.service';

describe('Experimental3462Service', () => {
  let service: Experimental3462Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3462Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
