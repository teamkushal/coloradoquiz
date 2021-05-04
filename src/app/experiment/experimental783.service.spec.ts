import { TestBed } from '@angular/core/testing';

import { Experimental783Service } from './experimental783.service';

describe('Experimental783Service', () => {
  let service: Experimental783Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental783Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
