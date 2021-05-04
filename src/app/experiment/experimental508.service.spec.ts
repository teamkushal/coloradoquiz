import { TestBed } from '@angular/core/testing';

import { Experimental508Service } from './experimental508.service';

describe('Experimental508Service', () => {
  let service: Experimental508Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental508Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
