import { TestBed } from '@angular/core/testing';

import { Experimental310Service } from './experimental310.service';

describe('Experimental310Service', () => {
  let service: Experimental310Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental310Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
