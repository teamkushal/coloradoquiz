import { TestBed } from '@angular/core/testing';

import { Experimental739Service } from './experimental739.service';

describe('Experimental739Service', () => {
  let service: Experimental739Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental739Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
