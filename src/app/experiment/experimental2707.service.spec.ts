import { TestBed } from '@angular/core/testing';

import { Experimental2707Service } from './experimental2707.service';

describe('Experimental2707Service', () => {
  let service: Experimental2707Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2707Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
