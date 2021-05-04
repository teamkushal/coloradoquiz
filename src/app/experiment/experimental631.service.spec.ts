import { TestBed } from '@angular/core/testing';

import { Experimental631Service } from './experimental631.service';

describe('Experimental631Service', () => {
  let service: Experimental631Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental631Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
