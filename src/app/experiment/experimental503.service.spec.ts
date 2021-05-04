import { TestBed } from '@angular/core/testing';

import { Experimental503Service } from './experimental503.service';

describe('Experimental503Service', () => {
  let service: Experimental503Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental503Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
