import { TestBed } from '@angular/core/testing';

import { Experimental460Service } from './experimental460.service';

describe('Experimental460Service', () => {
  let service: Experimental460Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental460Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
