import { TestBed } from '@angular/core/testing';

import { Experimental1569Service } from './experimental1569.service';

describe('Experimental1569Service', () => {
  let service: Experimental1569Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1569Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
