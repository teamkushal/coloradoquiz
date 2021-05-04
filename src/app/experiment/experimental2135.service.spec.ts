import { TestBed } from '@angular/core/testing';

import { Experimental2135Service } from './experimental2135.service';

describe('Experimental2135Service', () => {
  let service: Experimental2135Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2135Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
