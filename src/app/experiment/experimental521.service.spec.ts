import { TestBed } from '@angular/core/testing';

import { Experimental521Service } from './experimental521.service';

describe('Experimental521Service', () => {
  let service: Experimental521Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental521Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
