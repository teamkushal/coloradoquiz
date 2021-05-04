import { TestBed } from '@angular/core/testing';

import { Experimental2908Service } from './experimental2908.service';

describe('Experimental2908Service', () => {
  let service: Experimental2908Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2908Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
