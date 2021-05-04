import { TestBed } from '@angular/core/testing';

import { Experimental1940Service } from './experimental1940.service';

describe('Experimental1940Service', () => {
  let service: Experimental1940Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1940Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
