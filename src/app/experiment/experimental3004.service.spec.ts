import { TestBed } from '@angular/core/testing';

import { Experimental3004Service } from './experimental3004.service';

describe('Experimental3004Service', () => {
  let service: Experimental3004Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3004Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
