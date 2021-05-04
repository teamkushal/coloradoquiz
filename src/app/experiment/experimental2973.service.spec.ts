import { TestBed } from '@angular/core/testing';

import { Experimental2973Service } from './experimental2973.service';

describe('Experimental2973Service', () => {
  let service: Experimental2973Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2973Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
