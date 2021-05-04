import { TestBed } from '@angular/core/testing';

import { Experimental171Service } from './experimental171.service';

describe('Experimental171Service', () => {
  let service: Experimental171Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental171Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
