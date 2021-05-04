import { TestBed } from '@angular/core/testing';

import { Experimental186Service } from './experimental186.service';

describe('Experimental186Service', () => {
  let service: Experimental186Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental186Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
