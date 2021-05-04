import { TestBed } from '@angular/core/testing';

import { Experimental3840Service } from './experimental3840.service';

describe('Experimental3840Service', () => {
  let service: Experimental3840Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3840Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
