import { TestBed } from '@angular/core/testing';

import { Experimental216Service } from './experimental216.service';

describe('Experimental216Service', () => {
  let service: Experimental216Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental216Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
