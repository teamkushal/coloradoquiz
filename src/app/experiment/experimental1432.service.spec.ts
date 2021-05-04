import { TestBed } from '@angular/core/testing';

import { Experimental1432Service } from './experimental1432.service';

describe('Experimental1432Service', () => {
  let service: Experimental1432Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1432Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
