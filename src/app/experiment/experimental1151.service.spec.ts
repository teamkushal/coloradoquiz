import { TestBed } from '@angular/core/testing';

import { Experimental1151Service } from './experimental1151.service';

describe('Experimental1151Service', () => {
  let service: Experimental1151Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1151Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
