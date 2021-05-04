import { TestBed } from '@angular/core/testing';

import { Experimental902Service } from './experimental902.service';

describe('Experimental902Service', () => {
  let service: Experimental902Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental902Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
