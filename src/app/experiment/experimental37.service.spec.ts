import { TestBed } from '@angular/core/testing';

import { Experimental37Service } from './experimental37.service';

describe('Experimental37Service', () => {
  let service: Experimental37Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental37Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
