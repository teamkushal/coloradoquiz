import { TestBed } from '@angular/core/testing';

import { Experimental1329Service } from './experimental1329.service';

describe('Experimental1329Service', () => {
  let service: Experimental1329Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1329Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
