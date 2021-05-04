import { TestBed } from '@angular/core/testing';

import { Experimental100Service } from './experimental100.service';

describe('Experimental100Service', () => {
  let service: Experimental100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
