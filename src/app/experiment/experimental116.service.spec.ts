import { TestBed } from '@angular/core/testing';

import { Experimental116Service } from './experimental116.service';

describe('Experimental116Service', () => {
  let service: Experimental116Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental116Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
