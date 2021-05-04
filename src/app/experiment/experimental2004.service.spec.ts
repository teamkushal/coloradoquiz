import { TestBed } from '@angular/core/testing';

import { Experimental2004Service } from './experimental2004.service';

describe('Experimental2004Service', () => {
  let service: Experimental2004Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2004Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
