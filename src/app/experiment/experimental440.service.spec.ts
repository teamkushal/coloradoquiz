import { TestBed } from '@angular/core/testing';

import { Experimental440Service } from './experimental440.service';

describe('Experimental440Service', () => {
  let service: Experimental440Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental440Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
