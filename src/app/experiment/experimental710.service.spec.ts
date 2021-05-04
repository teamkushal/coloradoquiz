import { TestBed } from '@angular/core/testing';

import { Experimental710Service } from './experimental710.service';

describe('Experimental710Service', () => {
  let service: Experimental710Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental710Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
