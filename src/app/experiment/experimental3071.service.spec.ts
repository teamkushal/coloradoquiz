import { TestBed } from '@angular/core/testing';

import { Experimental3071Service } from './experimental3071.service';

describe('Experimental3071Service', () => {
  let service: Experimental3071Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3071Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
