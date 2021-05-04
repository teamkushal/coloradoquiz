import { TestBed } from '@angular/core/testing';

import { Experimental1885Service } from './experimental1885.service';

describe('Experimental1885Service', () => {
  let service: Experimental1885Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1885Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
