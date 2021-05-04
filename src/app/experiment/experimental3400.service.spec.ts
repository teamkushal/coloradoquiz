import { TestBed } from '@angular/core/testing';

import { Experimental3400Service } from './experimental3400.service';

describe('Experimental3400Service', () => {
  let service: Experimental3400Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3400Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
