import { TestBed } from '@angular/core/testing';

import { Experimental1749Service } from './experimental1749.service';

describe('Experimental1749Service', () => {
  let service: Experimental1749Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1749Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
