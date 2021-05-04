import { TestBed } from '@angular/core/testing';

import { Experimental794Service } from './experimental794.service';

describe('Experimental794Service', () => {
  let service: Experimental794Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental794Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
