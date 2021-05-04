import { TestBed } from '@angular/core/testing';

import { Experimental3820Service } from './experimental3820.service';

describe('Experimental3820Service', () => {
  let service: Experimental3820Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3820Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
