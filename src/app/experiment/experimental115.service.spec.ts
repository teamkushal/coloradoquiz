import { TestBed } from '@angular/core/testing';

import { Experimental115Service } from './experimental115.service';

describe('Experimental115Service', () => {
  let service: Experimental115Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental115Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
