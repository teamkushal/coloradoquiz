import { TestBed } from '@angular/core/testing';

import { Experimental85Service } from './experimental85.service';

describe('Experimental85Service', () => {
  let service: Experimental85Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental85Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
