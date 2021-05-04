import { TestBed } from '@angular/core/testing';

import { Experimental967Service } from './experimental967.service';

describe('Experimental967Service', () => {
  let service: Experimental967Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental967Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
