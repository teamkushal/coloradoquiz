import { TestBed } from '@angular/core/testing';

import { Experimental3479Service } from './experimental3479.service';

describe('Experimental3479Service', () => {
  let service: Experimental3479Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3479Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
