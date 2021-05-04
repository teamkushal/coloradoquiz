import { TestBed } from '@angular/core/testing';

import { Experimental2433Service } from './experimental2433.service';

describe('Experimental2433Service', () => {
  let service: Experimental2433Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2433Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
