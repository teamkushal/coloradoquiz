import { TestBed } from '@angular/core/testing';

import { Experimental2152Service } from './experimental2152.service';

describe('Experimental2152Service', () => {
  let service: Experimental2152Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2152Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
