import { TestBed } from '@angular/core/testing';

import { Experimental570Service } from './experimental570.service';

describe('Experimental570Service', () => {
  let service: Experimental570Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental570Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
