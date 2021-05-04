import { TestBed } from '@angular/core/testing';

import { Experimental712Service } from './experimental712.service';

describe('Experimental712Service', () => {
  let service: Experimental712Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental712Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
