import { TestBed } from '@angular/core/testing';

import { Experimental2355Service } from './experimental2355.service';

describe('Experimental2355Service', () => {
  let service: Experimental2355Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2355Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
