import { TestBed } from '@angular/core/testing';

import { Experimental785Service } from './experimental785.service';

describe('Experimental785Service', () => {
  let service: Experimental785Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental785Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
