import { TestBed } from '@angular/core/testing';

import { Experimental396Service } from './experimental396.service';

describe('Experimental396Service', () => {
  let service: Experimental396Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental396Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
