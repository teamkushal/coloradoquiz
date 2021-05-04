import { TestBed } from '@angular/core/testing';

import { Experimental1796Service } from './experimental1796.service';

describe('Experimental1796Service', () => {
  let service: Experimental1796Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1796Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
