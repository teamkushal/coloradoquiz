import { TestBed } from '@angular/core/testing';

import { Experimental529Service } from './experimental529.service';

describe('Experimental529Service', () => {
  let service: Experimental529Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental529Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
