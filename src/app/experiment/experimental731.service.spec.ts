import { TestBed } from '@angular/core/testing';

import { Experimental731Service } from './experimental731.service';

describe('Experimental731Service', () => {
  let service: Experimental731Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental731Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
