import { TestBed } from '@angular/core/testing';

import { Experimental120Service } from './experimental120.service';

describe('Experimental120Service', () => {
  let service: Experimental120Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental120Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
