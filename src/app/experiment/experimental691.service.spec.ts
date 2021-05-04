import { TestBed } from '@angular/core/testing';

import { Experimental691Service } from './experimental691.service';

describe('Experimental691Service', () => {
  let service: Experimental691Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental691Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
