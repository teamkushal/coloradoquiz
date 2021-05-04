import { TestBed } from '@angular/core/testing';

import { Experimental689Service } from './experimental689.service';

describe('Experimental689Service', () => {
  let service: Experimental689Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental689Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
