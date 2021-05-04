import { TestBed } from '@angular/core/testing';

import { Experimental1322Service } from './experimental1322.service';

describe('Experimental1322Service', () => {
  let service: Experimental1322Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1322Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
