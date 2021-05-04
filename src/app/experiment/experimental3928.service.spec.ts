import { TestBed } from '@angular/core/testing';

import { Experimental3928Service } from './experimental3928.service';

describe('Experimental3928Service', () => {
  let service: Experimental3928Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3928Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
