import { TestBed } from '@angular/core/testing';

import { Experimental179Service } from './experimental179.service';

describe('Experimental179Service', () => {
  let service: Experimental179Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental179Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
