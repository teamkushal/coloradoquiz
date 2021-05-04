import { TestBed } from '@angular/core/testing';

import { Experimental749Service } from './experimental749.service';

describe('Experimental749Service', () => {
  let service: Experimental749Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental749Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
