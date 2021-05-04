import { TestBed } from '@angular/core/testing';

import { Experimental1395Service } from './experimental1395.service';

describe('Experimental1395Service', () => {
  let service: Experimental1395Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1395Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
