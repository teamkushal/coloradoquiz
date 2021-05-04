import { TestBed } from '@angular/core/testing';

import { Experimental678Service } from './experimental678.service';

describe('Experimental678Service', () => {
  let service: Experimental678Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental678Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
