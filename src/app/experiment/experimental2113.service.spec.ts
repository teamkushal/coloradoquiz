import { TestBed } from '@angular/core/testing';

import { Experimental2113Service } from './experimental2113.service';

describe('Experimental2113Service', () => {
  let service: Experimental2113Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2113Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
