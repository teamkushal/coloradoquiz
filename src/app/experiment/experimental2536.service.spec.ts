import { TestBed } from '@angular/core/testing';

import { Experimental2536Service } from './experimental2536.service';

describe('Experimental2536Service', () => {
  let service: Experimental2536Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2536Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
