import { TestBed } from '@angular/core/testing';

import { Experimental206Service } from './experimental206.service';

describe('Experimental206Service', () => {
  let service: Experimental206Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental206Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
