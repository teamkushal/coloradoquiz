import { TestBed } from '@angular/core/testing';

import { Experimental607Service } from './experimental607.service';

describe('Experimental607Service', () => {
  let service: Experimental607Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental607Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
