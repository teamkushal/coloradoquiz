import { TestBed } from '@angular/core/testing';

import { Experimental491Service } from './experimental491.service';

describe('Experimental491Service', () => {
  let service: Experimental491Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental491Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
