import { TestBed } from '@angular/core/testing';

import { Experimental3822Service } from './experimental3822.service';

describe('Experimental3822Service', () => {
  let service: Experimental3822Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3822Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
