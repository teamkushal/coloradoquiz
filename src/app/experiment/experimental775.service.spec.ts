import { TestBed } from '@angular/core/testing';

import { Experimental775Service } from './experimental775.service';

describe('Experimental775Service', () => {
  let service: Experimental775Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental775Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
