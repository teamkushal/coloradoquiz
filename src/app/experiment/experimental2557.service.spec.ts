import { TestBed } from '@angular/core/testing';

import { Experimental2557Service } from './experimental2557.service';

describe('Experimental2557Service', () => {
  let service: Experimental2557Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2557Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
