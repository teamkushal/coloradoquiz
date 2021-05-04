import { TestBed } from '@angular/core/testing';

import { Experimental1971Service } from './experimental1971.service';

describe('Experimental1971Service', () => {
  let service: Experimental1971Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1971Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
