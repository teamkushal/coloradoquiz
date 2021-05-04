import { TestBed } from '@angular/core/testing';

import { Experimental2794Service } from './experimental2794.service';

describe('Experimental2794Service', () => {
  let service: Experimental2794Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2794Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
