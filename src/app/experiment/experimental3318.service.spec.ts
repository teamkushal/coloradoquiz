import { TestBed } from '@angular/core/testing';

import { Experimental3318Service } from './experimental3318.service';

describe('Experimental3318Service', () => {
  let service: Experimental3318Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3318Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
