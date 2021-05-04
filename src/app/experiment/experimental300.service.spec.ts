import { TestBed } from '@angular/core/testing';

import { Experimental300Service } from './experimental300.service';

describe('Experimental300Service', () => {
  let service: Experimental300Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental300Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
