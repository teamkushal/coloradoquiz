import { TestBed } from '@angular/core/testing';

import { Experimental145Service } from './experimental145.service';

describe('Experimental145Service', () => {
  let service: Experimental145Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental145Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
