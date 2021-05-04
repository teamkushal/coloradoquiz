import { TestBed } from '@angular/core/testing';

import { Experimental868Service } from './experimental868.service';

describe('Experimental868Service', () => {
  let service: Experimental868Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental868Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
