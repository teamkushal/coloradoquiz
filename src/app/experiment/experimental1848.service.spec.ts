import { TestBed } from '@angular/core/testing';

import { Experimental1848Service } from './experimental1848.service';

describe('Experimental1848Service', () => {
  let service: Experimental1848Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1848Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
