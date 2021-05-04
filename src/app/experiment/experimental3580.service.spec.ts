import { TestBed } from '@angular/core/testing';

import { Experimental3580Service } from './experimental3580.service';

describe('Experimental3580Service', () => {
  let service: Experimental3580Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3580Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
