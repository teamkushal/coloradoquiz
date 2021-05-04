import { TestBed } from '@angular/core/testing';

import { Experimental271Service } from './experimental271.service';

describe('Experimental271Service', () => {
  let service: Experimental271Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental271Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
