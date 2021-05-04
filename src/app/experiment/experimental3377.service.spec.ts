import { TestBed } from '@angular/core/testing';

import { Experimental3377Service } from './experimental3377.service';

describe('Experimental3377Service', () => {
  let service: Experimental3377Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3377Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
