import { TestBed } from '@angular/core/testing';

import { Experimental2283Service } from './experimental2283.service';

describe('Experimental2283Service', () => {
  let service: Experimental2283Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2283Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
