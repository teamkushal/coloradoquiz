import { TestBed } from '@angular/core/testing';

import { Experimental777Service } from './experimental777.service';

describe('Experimental777Service', () => {
  let service: Experimental777Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental777Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
