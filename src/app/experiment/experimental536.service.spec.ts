import { TestBed } from '@angular/core/testing';

import { Experimental536Service } from './experimental536.service';

describe('Experimental536Service', () => {
  let service: Experimental536Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental536Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
