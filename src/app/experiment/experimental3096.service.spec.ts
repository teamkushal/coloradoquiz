import { TestBed } from '@angular/core/testing';

import { Experimental3096Service } from './experimental3096.service';

describe('Experimental3096Service', () => {
  let service: Experimental3096Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3096Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
