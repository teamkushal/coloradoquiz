import { TestBed } from '@angular/core/testing';

import { Experimental3094Service } from './experimental3094.service';

describe('Experimental3094Service', () => {
  let service: Experimental3094Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3094Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
