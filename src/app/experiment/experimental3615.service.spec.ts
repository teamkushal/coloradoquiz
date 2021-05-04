import { TestBed } from '@angular/core/testing';

import { Experimental3615Service } from './experimental3615.service';

describe('Experimental3615Service', () => {
  let service: Experimental3615Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3615Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
