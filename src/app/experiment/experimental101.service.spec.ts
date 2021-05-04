import { TestBed } from '@angular/core/testing';

import { Experimental101Service } from './experimental101.service';

describe('Experimental101Service', () => {
  let service: Experimental101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
