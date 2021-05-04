import { TestBed } from '@angular/core/testing';

import { Experimental561Service } from './experimental561.service';

describe('Experimental561Service', () => {
  let service: Experimental561Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental561Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
