import { TestBed } from '@angular/core/testing';

import { Experimental2398Service } from './experimental2398.service';

describe('Experimental2398Service', () => {
  let service: Experimental2398Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2398Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
