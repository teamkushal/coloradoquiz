import { TestBed } from '@angular/core/testing';

import { Experimental258Service } from './experimental258.service';

describe('Experimental258Service', () => {
  let service: Experimental258Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental258Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
