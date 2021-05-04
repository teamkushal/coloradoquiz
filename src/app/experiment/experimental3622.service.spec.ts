import { TestBed } from '@angular/core/testing';

import { Experimental3622Service } from './experimental3622.service';

describe('Experimental3622Service', () => {
  let service: Experimental3622Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3622Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
