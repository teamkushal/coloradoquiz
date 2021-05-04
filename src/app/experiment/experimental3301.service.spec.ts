import { TestBed } from '@angular/core/testing';

import { Experimental3301Service } from './experimental3301.service';

describe('Experimental3301Service', () => {
  let service: Experimental3301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
