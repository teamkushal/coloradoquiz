import { TestBed } from '@angular/core/testing';

import { Experimental1108Service } from './experimental1108.service';

describe('Experimental1108Service', () => {
  let service: Experimental1108Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1108Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
