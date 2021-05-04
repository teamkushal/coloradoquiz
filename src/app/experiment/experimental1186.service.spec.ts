import { TestBed } from '@angular/core/testing';

import { Experimental1186Service } from './experimental1186.service';

describe('Experimental1186Service', () => {
  let service: Experimental1186Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1186Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
