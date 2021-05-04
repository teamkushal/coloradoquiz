import { TestBed } from '@angular/core/testing';

import { Experimental1197Service } from './experimental1197.service';

describe('Experimental1197Service', () => {
  let service: Experimental1197Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1197Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
