import { TestBed } from '@angular/core/testing';

import { Experimental329Service } from './experimental329.service';

describe('Experimental329Service', () => {
  let service: Experimental329Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental329Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
