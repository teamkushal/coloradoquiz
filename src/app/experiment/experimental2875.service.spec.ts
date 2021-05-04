import { TestBed } from '@angular/core/testing';

import { Experimental2875Service } from './experimental2875.service';

describe('Experimental2875Service', () => {
  let service: Experimental2875Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2875Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
