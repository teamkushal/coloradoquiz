import { TestBed } from '@angular/core/testing';

import { Experimental164Service } from './experimental164.service';

describe('Experimental164Service', () => {
  let service: Experimental164Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental164Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
