import { TestBed } from '@angular/core/testing';

import { Experimental687Service } from './experimental687.service';

describe('Experimental687Service', () => {
  let service: Experimental687Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental687Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
