import { TestBed } from '@angular/core/testing';

import { Experimental233Service } from './experimental233.service';

describe('Experimental233Service', () => {
  let service: Experimental233Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental233Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
