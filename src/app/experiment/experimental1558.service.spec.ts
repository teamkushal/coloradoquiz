import { TestBed } from '@angular/core/testing';

import { Experimental1558Service } from './experimental1558.service';

describe('Experimental1558Service', () => {
  let service: Experimental1558Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1558Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
