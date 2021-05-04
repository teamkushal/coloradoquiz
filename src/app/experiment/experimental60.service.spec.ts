import { TestBed } from '@angular/core/testing';

import { Experimental60Service } from './experimental60.service';

describe('Experimental60Service', () => {
  let service: Experimental60Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental60Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
