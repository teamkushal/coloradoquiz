import { TestBed } from '@angular/core/testing';

import { Experimental1980Service } from './experimental1980.service';

describe('Experimental1980Service', () => {
  let service: Experimental1980Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1980Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
